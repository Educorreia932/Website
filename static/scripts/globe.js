let width = 350,
    height = 350,
    sens = 0.40,
    focused,
    data;

// Setting projection
let projection = d3.geoOrthographic()
    .scale(150)
    .rotate([0, 0])
    .translate([width / 2, height / 2])
    .clipAngle(90);

let path = d3.geoPath(projection);

// SVG container
let svg = d3.select("#globe").append("svg")
    .attr("width", width)
    .attr("height", height);

// Adding water
svg.append("path")
    .datum({ type: "Sphere" })
    .attr("class", "water")
    .attr("d", path);

let countryTooltip = d3.select("body").append("div").attr("class", "countryTooltip");

queue()
    .defer(d3.json, 'https://unpkg.com/world-atlas@1/world/110m.json')
    .defer(d3.tsv, "https://raw.githubusercontent.com/KoGor/Map-Icons-Generator/master/data/world-110m-country-names.tsv")
    .defer(d3.csv, "https://gist.githubusercontent.com/Educorreia932/677a39978af8a5983150df5d107942ba/raw/5152b1cae2d866ad64bf58395153e36b89672a9f/visited-countries.csv", data)
    .await(ready);

//Main function
function ready(error, world, countryData, data) {
    let countryById = {};
    let countries = topojson.feature(world, world["objects"]["countries"]).features;

    // Adding countries
    countryData.forEach(function (d) {
        countryById[d.id] = d.name;
    });

    // Drawing countries on the globe
    svg.selectAll("path.land")
        .data(countries)
        .enter().append("path")
        .attr("class", "land")
        .attr("d", path)
        .each(function(d) {
            let country_name = "undefined";

            try {
                d.id = d.id.replace(/^0+/, ''); // Removes leading zeros
                country_name = countryById[d.id].split(' ').join('_');
            }

            catch(err) {
                console.log(country_name)
            }

            d3.select(this).attr("id", country_name);
        })

        // Mouse events
        .on("mouseover", function (d) {
            countryTooltip.text(countryById[d.id.replace(/^0+/, '')])
                .style("left", (d3.event.pageX + 7) + "px")
                .style("top", (d3.event.pageY - 15) + "px")
                .style("display", "block")
                .style("opacity", 1);
        })

        .on("mouseout", function (d) {
            countryTooltip.style("opacity", 0)
                .style("display", "none");
        })

        .on("mousemove", function (d) {
            countryTooltip.style("left", (d3.event.pageX + 7) + "px")
                .style("top", (d3.event.pageY - 15) + "px");
        });

    // Highlight visited countries
    d3.map(data, function(d) {
        d3.selectAll("#" + d.country.split(' ').join('_')).attr("class", "highlight");
    });

    // Drag event
    svg.call(d3.drag()
        .subject(function () { let r = projection.rotate(); return { x: r[0] / sens, y: -r[1] / sens }; })
        .on("drag", function () {
            let rotate = projection.rotate();
            projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]]);
            svg.selectAll("path").attr("d", path);
            svg.selectAll(".focused").classed("focused", focused = false);
        }))

    // Country focus on option select
    d3.select("select").on("change", function () {
        projection.rotate();
        let focusedCountry = country(countries, this),
            p = d3.geoCentroid(focusedCountry);

        svg.selectAll(".focused").classed("focused", focused = false);

        // Globe rotating
        (function transition() {
            d3.transition()
                .duration(2500)
                .tween("rotate", function () {
                    let r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
                    return function (t) {
                        projection.rotate(r(t));
                        svg.selectAll("path").attr("d", path)
                            .classed("focused", function (d) {
                                return d.id === focusedCountry.id ? focused = d : false;
                            });
                    };
                })
        })();
    });

    function country(cnt, sel) {
        for (let i = 0, l = cnt.length; i < l; i++)
            if (cnt[i].id.replace(/^0+/, '') === sel.value)
                return cnt[i];
    }
}
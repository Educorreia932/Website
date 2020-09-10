(function($globle) {
    var arr = {
        arr_sort: [],
        arr_random: [],
        arr_display: []
    };

    var Gamer = function() {
        this.config = {
            size: '4*4',
            url: '/data/pic.jpg'
        };
    };

    Gamer.prototype.init = function() {
        this.sortArray();
        this.createChild();
    };

    Gamer.prototype.sortArray = function() {
        var _w = this.config.size.split('*')[0],
            _h = this.config.size.split('*')[1];

        var temp = [];
        for (var i = 0; i < _w * _h; i++) {
            temp.push(i + 1);
        }

        arr.arr_sort = temp.slice(0);

        arr.arr_random = temp.sort(function() {
            return Math.random() - 0.5;
        });

        var gamerBody = document.getElementById('gamerBody');
        var margin = (parseInt(_h, 10) + 1) + "px";

        gamerBody.setAttribute("style", "margin:" + margin);
    };

    Gamer.prototype.createChild = function() {
        var gamerBody = document.getElementById('gamerBody');
        var index = 0;
        var rows = this.config.size.split('*')[0];
        var cols = this.config.size.split('*')[1];
        var temp = [];
        for (var row = 0; row < rows; row++) {
            var col = 0;
            for (; col < cols; col++) {
                var subElement = document.createElement('div');
                subElement.id = arr.arr_sort[index++];
                subElement.style.width = (gamerBody.offsetWidth - 8) / cols + 'px';
                subElement.style.height = (gamerBody.offsetHeight - 8) / rows + 'px';
                subElement.style.disPlay = "block";
                subElement.style.float = "left";
                subElement.style.background = "url('" + this.config.url + "') " + (-gamerBody.offsetWidth / cols * col) + "px " + (-gamerBody.offsetHeight / rows * row) + "px";
                subElement.style.margin = "1px";

                temp.push(subElement);
            }
        }

        arr.arr_random.forEach(function(item) {
            var index = temp.map(function(subItem) {
                return subItem.id - 0;
            }).indexOf(item);

            if (index !== -1) {
                arr.arr_display.push(temp[index]);
                gamerBody.appendChild(temp[index]);
            }
        });
        this.addUserHandle();
    };

    Gamer.prototype.addUserHandle = function() {
        var that = this;
        arr.arr_display.forEach(function(item, disPlayIndex) {
            item.addEventListener('mousedown', function(e) {
                var dialog = document.createElement('div');

                dialog.id = 'dalog';
                dialog.style.width = item.offsetWidth + "px";
                dialog.style.height = item.offsetHeight + "px";
                dialog.style.position = "absolute";
                dialog.style.background = item.style.background;

                dialog.style.left = (e.clientX - this.offsetWidth / 2) + "px";
                dialog.style.top = (e.clientY - this.offsetWidth / 2) + "px";
                item.style.opacity = 0.8;

                gamerBody.appendChild(dialog);
        
                dialog.addEventListener('mousemove', function(ev) {
                    dialog.style.left = (ev.clientX - this.offsetWidth / 2) + "px";
                    dialog.style.top = (ev.clientY - this.offsetHeight / 2) + "px";
                }, false);

                dialog.addEventListener('mouseup', function(e) {
                    var endX = e.clientX;
                    var endY = e.clientY;
                    var toIndex = -1;

                    for (var i = 0, l = arr.arr_display.length; i < l; i++) {
                        if (arr.arr_display[i].offsetLeft <= endX && (arr.arr_display[i].offsetLeft + arr.arr_display[i].offsetWidth) > endX &&
                            arr.arr_display[i].offsetTop <= endY && (arr.arr_display[i].offsetTop + arr.arr_display[i].offsetHeight) > endY) {
                            toIndex = i;
                            break;
                        }
                    }

                    var swapTemp = {
                        fromId: item.id,
                        toId: arr.arr_display[toIndex].id,
                        fromBackGround: item.style.background,
                        toBackGround: arr.arr_display[toIndex].style.background
                    };

                    arr.arr_display[toIndex].id = swapTemp.fromId;
                    arr.arr_display[toIndex].style.background = swapTemp.fromBackGround;

                    item.id = swapTemp.toId;
                    item.style.background = swapTemp.toBackGround;
                    item.style.opacity = 1;
                    gamerBody.removeChild(dialog);

                    setTimeout(function() {
                        that.gameJudge();
                    }, 0);
                }, false);
            }, false);
        });
    };

    Gamer.prototype.gameJudge = function() {
        var flag = true;
        for (var index = 0, l = arr.arr_sort.length; index < l; index++) {
            if (arr.arr_sort[index] !== arr.arr_display[index].id - 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            alert('哎呦，不错哦~');
        }
    };

    $globle.gamer = new Gamer();
})(window)
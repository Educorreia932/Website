var files = 
    <?php 
        $out = array();

        foreach (glob('../html/blog/*.html') as $filename) {
            $p = pathinfo($filename);
            $out[] = $p['filename'];
        }
        
        echo json_encode($out); 
    ?>;

console.log(files);

<?php

/*

How To Use?

<?php include 'file-list.php'?>
<?=show_file_list('./','WebRoot')?>

*/

function show_file_list($dir, $name) {
    echo '<h2>'.$name.'</h2>';
    if(file_exists($dir)) {
        if($dh = opendir($dir)) {
            while(($file = readdir($dh)) !== false) {
                if(!($file=='.' ||$file=='..' || $file=='index.php' || $file=='index.html' || strpos($file,'/t'))) {
                    echo "<li><a href='".$dir.$file."'>".$file."</a></li>";
                }
            }
        closedir($dh);
        }
    } else {
        echo "<p>ERROR</p>";
    }
}
?>
<!DOCTYPE HTML>
<html>
	<head>
        <title></title>
        <meta property="og:title" content=""/>
        <meta property="og:locale" content="ko_KR" />
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
	</head>
	<body>
		<?php
            $dir = "./";

            echo '<h2>Uploaded Files</h2>';
            if(file_exists($dir)) {
                if($dh = opendir($dir)) {
                    while(($file = readdir($dh)) !== false) {
                        if(!($file=='.' ||$file=='..' || $file=='index.php' || $file=='upload' || $file=='assets' || strpos($file,'/t'))) {
                            echo "<li><a href='".$dir.$file."'>".$file."</a></li>";
                        }
                    }
                    closedir($dh);
                }
            } else {
                echo "<p>ERROR / 관리자에게 <a href=\"mailto:YOUR_MAIL\">문의</a>하세요.</p>";
            }
        ?>
	</body>
</html>
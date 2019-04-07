<?php
extract($_POST);

if($uptitle == "" || $upsubtitle == "") {
    echo "제목이나 부제목을 빈칸으로 둘 수 없습니다!";

    return;
}

$dir = '../'.$uptitle.'/';

if(!is_dir($dir)) {
    mkdir($dir);
    mkdir($dir.'file/');
    mkdir($dir.'info/');
}

if(move_uploaded_file($_FILES['upimg']['tmp_name'], $dir.'info/'.'background.gif')){
    echo "배경 이미지가 업로드 되었습니다.<br />";
} else {
    echo "배경 이미지 업로드 실패 !! 다시 시도해주세요.<br />";
}

if(move_uploaded_file($_FILES['upfile']['tmp_name'], $dir.'file/'.$_FILES['upfile']['name'])){
    echo "파일이 업로드 되었습니다.<br />";
} else {
    echo "파일 업로드 실패 !! 다시 시도해주세요.<br />";
}

$filePath = $dir."info/name.txt";
$fp = fopen($filePath, "w");
fwrite($fp, $_FILES['upfile']['name']);
fclose($fp);

$filePath = $dir."index.php";
$fp = fopen($filePath, "w");
fwrite($fp, '
<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
        <link rel="stylesheet" href="../assets/mirror.css">
        <style>
        .back_img {
            background-image:url(./info/background.gif);
            background-attachment:fixed;
            background-position:center center;
            background-repeat:no-repeat;
            background-size:cover;
            width:100%;
            height:100vh;
            text-align:center;
            position: fixed;
            left: 0;
            top: 0;
        }
        </style>
        <title>'.$uptitle.'</title>
	</head>
	<body oncontextmenu="return false" ondragstart="return false" onselectstart="return false">
    <div class="back_img">
      <div class="back_img_mask">
          <h1 class="title">'.$uptitle.'</h1>
          <p><a href="./info/getFile.php">'.$upsubtitle.'</a></p>
          <p>다운로드 받은 횟수 : <?php include "../assets/count.php"?></p>
      </div>
    </div>
</body>
</html>
');
fclose($fp);

copy('../Template/info/getFile.php', $dir.'info/getFile.php');
copy('../Template/info/count_temp.txt', $dir.'info/count.txt');
?>

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
        <title>Damagochi</title>
	</head>
	<body oncontextmenu='return false' ondragstart='return false' onselectstart='return false'>
    <div class="back_img">
      <div class="back_img_mask">
          <h1 class="title">Damagochi</h1>
          <p><a href="./info/getFile.php">Android 5.1+ Alpha</a></p>
          <p>다운로드 받은 횟수 : <?php include "../assets/count.php"?></p>
      </div>
    </div>
    </body>
</html>
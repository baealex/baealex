<?php
$filePath = "./info/count.txt";
$count = file($filePath);
$count = trim($count[0]);

$fp = fopen($filePath, "w");
fwrite($fp, $count);
fclose($fp);

echo $count;
?>
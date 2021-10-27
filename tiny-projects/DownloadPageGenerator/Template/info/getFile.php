<?php
    $filePath = "./count.txt";
    $count = file($filePath);
    $count = trim($count[0]);

    $count++;
    $fp = fopen($filePath, "w");
    fwrite($fp, $count);
    fclose($fp);

    $filePath = "./name.txt";
    $name = file($filePath);

    // File to download.
    $GetLink = '../file/'.$name[0].'';

    // Maximum size of chunks (in bytes).
    $maxRead = 10 * 1024 * 1024; // 1MB

    // Give a nice name to your download.
    $DownlooadName = ''.$name[0];

    // Open a file in read mode.
    $fh = fopen($GetLink, 'r');

    // These headers will force download on browser,
    // and set the custom file name for the download, respectively.
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename="' . $DownlooadName . '"');

    // Run this until we have read the whole file.
    // feof (eof means "end of file") returns `true` when the handler
    // has reached the end of file.
    while (!feof($fh)) {
        // Read and output the next chunk.
        echo fread($fh, $maxRead);

        // Flush the output buffer to free memory.
        ob_flush();
    }

    // Exit to make sure not to output anything else.
    exit;
?>
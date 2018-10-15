<?php
$arr = json_decode(file_get_contents('https://storage.isdj.ga/schedule/comci.json'), true);
print_r($arr);
?>

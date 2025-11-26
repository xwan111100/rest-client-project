<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$apiKey = "d1c4b3508270d50b04f4bf0e48930e60";
$url = "https://gnews.io/api/v4/search?q=indonesia&lang=id&max=10&apikey=" . $apiKey;

echo file_get_contents($url);
?>

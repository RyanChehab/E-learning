<?php

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$host = 'localhost';
$username = 'root';
$pass = '';
$db = 'elreaning';

$conn = new mysqli($host,$username,$pass,$db);

// if ($conn->connect_error){
//     echo "failed";
// }else {
//     echo "connected";
// }
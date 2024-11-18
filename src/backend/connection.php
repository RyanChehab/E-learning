<?php

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
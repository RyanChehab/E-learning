<?php
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];
}

$sql = 'SELECT password FROM users where email = ?';



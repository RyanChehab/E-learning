<?php
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $user_type = $_POST['user_type'];
}
<?php
include 'connetcion.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $input = json_decode(file_get_contents('php://input'),true);
    $user_id = $input["user_id"];
}
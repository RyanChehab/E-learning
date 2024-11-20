<?php
include 'connection';

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $input = json_decode(file_get_contents("php://input"),true);
    $user_type= $input['user_type'];
}

$sql = "SELECT * FROM users where user_type = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("s","student")
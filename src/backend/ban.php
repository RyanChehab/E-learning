<?php

include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $input = json_decode(file_get_contents("php://input"),true);
    $user_id = $input['user_id'];
}

$sql = 'UPDATE users SET banned = 1 WHERE id = ?';

$stmt= $conn->prepare($sql);

$stmt-> bind_param("i", $user_id);

$stmt->execute();


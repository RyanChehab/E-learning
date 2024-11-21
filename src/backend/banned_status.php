<?php
include 'connetcion.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $input = json_decode(file_get_contents('php://input'),true);
    $user_id = $input["user_id"];
}

$sql = "SELECT banned from users where user_id = ?"; 

$stmt = $conn->prepare($sql);

$stmt->bind_param('i', $user_id);

$stmt->execute();

$stmt->bind_result($status);

if ($stmt->fetch()){
    $response = [];
    $response['status'] = "success";
    $response['status'] = $status;
    http_response_code(200);
    echo json_encode($response);
}else{
    $response = [];
    $response['status'] = "failed";
    $response['status'] = "user not found";
    http_response_code(404);
    echo json_encode($response);
}

<?php
include 'connection';

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $input = json_decode(file_get_contents("php://input"),true);
    $user_type= $input['user_type'];
}

$sql = "SELECT * FROM users where user_type = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("s",$user_type);

$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0){
    $row = [];
    while ($row = $result->fetch_assoc()){
        $row[] = $row;
    }
    $response = [];
    $response['status'] = 'success';
    $respone['result']= $row;
    http_response_code(200);
    json_encode($response);
}else{
    $respone['status'] = 'success';
    $response['result'] = [];
}
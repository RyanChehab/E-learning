<?php
include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $input = json_decode(file_get_contents("php://input"),true);
    $user_type= $input['user_type'];
}

$sql = "SELECT user_id, email, banned FROM users where user_type = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("s",$user_type);

$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0){
    $rows = [];
    while ($row = $result->fetch_assoc()){
        $rows[] = $row;
    }
    $response = [];
    $response['status'] = 'success';
    $response['result']= $rows;
    http_response_code(200);
    echo json_encode($response);
}else{
    $respone['status'] = 'no users found';
    $response['result'] = [];
    http_response_code(200);
    echo json_encode($response);
}
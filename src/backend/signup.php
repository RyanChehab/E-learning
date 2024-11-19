<?php
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $user_type = $_POST['user_type'];
}

$hashed = password_hash($password,PASSWORD_DEFAULT);

$banned = 0;

$sql = "INSERT INTO users(name,email,password,user_type,banned) VALUES(?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param("ssssi",$name,$email,$hashed,$user_type,$banned);

if ($stmt->execute()){
    $response =[];
    $response['status'] = "success";
    $response['message'] = "user added";
    http_response_code(200);
    echo json_encode($response);
}else{
    $response =[];
    $response['status'] = "failed";
    $response['message'] = "failure adding user";
    http_response_code(400);
    echo json_encode($response);
}
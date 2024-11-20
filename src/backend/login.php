<?php
include 'connection.php';

require 'C:\xampp\htdocs\elearning\vendor\autoload.php';
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secret_key = 'mykey';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $input = json_decode(file_get_contents("php://input"),true);
    $email = $input['email'];
    $password = $input['password'];
}

$sql = 'SELECT user_id, password, user_type FROM users WHERE email = ?';

$stmt = $conn->prepare($sql);

$stmt->bind_param("s",$email);

$stmt->execute();

$result = $stmt->get_result();

if($result ->num_rows>0){
    $row = $result->fetch_assoc();
    
    $hashed = $row['password'];

    if(password_verify($password,$hashed)){

        $payload =[
            "user_id" => $row['user_id'],
            "user_type" => $row['user_type']
        ];

        // this is the token 
        $jwt = JWT::encode($payload,$secret_key, 'HS256');

        $response = [
            'status' => 'success',
            'message' => 'Login successful',
            'token' => $jwt
        ]; 
        http_response_code(200);
        echo json_encode($response);
    }else{
        $response = []; 
        $response['status']= "failed";
        $response['message'] = 'login failed';
        http_response_code(400);
        echo json_encode($response);
    }

}
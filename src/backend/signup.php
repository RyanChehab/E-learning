<?php
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $input = json_decode(file_get_contents("php://input"),true);
    $name = $input['name'];
    $email = $input['email'];
    $password = $input['password'];
    $user_type = $input['user_type'];
}

$sql_test = "select * from users where email =  ?";

$test_stmt = $conn->prepare($sql_test);

$test_stmt->bind_param("s", $email);

$test_stmt->execute();

$result = $test_stmt->get_result();

if($result->num_rows > 0){
    $response =[];
    $response['status'] = "failed";
    $response['message'] = "user already registered";   
    http_response_code(400);
    echo json_encode($response);
    exit;
}else{
    
$hashed = password_hash($password,PASSWORD_DEFAULT);

$banned = 0;

// $user_type= "student";

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

}

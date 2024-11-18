<?php
include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];
}

$sql = 'SELECT password FROM users where email = ?';

$stmt = $conn->prepare($sql);

$stmt->bind_param("s",$email);

$stmt->execute();

$result = $stmt->get_result();

if($result ->num_rows>0){
    $row = $result->fetch_assoc();
    
    $hashed = $row['password'];

    if(password_verify($password,$hashed)){
        $response = []; 
        $response['status']= "success";
        $response['message'] = 'login successfull';
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
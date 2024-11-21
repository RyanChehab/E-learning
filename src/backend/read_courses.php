<?php

include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $sql = "SELECT * from courses";

    $stmt = $conn->prepare($sql);

    $stmt->execute();

    $result = $stmt->get_result();
    
    $rows=[];

    while($row = $result->fetch_assoc()){
        $rows[] = $row;
    }

    $response = [];
    $response['status'] = "success";
    $response['result'] = $rows;
    json_encode()


}

// $input = json_decode(file_get_contents("php://input"),true)
//     $title = $input['title'];
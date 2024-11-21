<?php

include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $sql = "SELECT * from courses";

    $stmt = $conn->prepare($sql);

    $stmt->execute();

    $stmt->get_result();
    
    $rows=[];
}

// $input = json_decode(file_get_contents("php://input"),true)
//     $title = $input['title'];
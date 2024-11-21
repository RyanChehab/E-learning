<?php

include 'connection.php';

if ($_SERVER['REQUEST_METHOD']==='POST'){
    $input = json_decode(file_get_contents('php://'),true);
    $title = $input['title'];
    $description = $input['description'];
}

$instructor_id = 11;
$sql = 'INSERT INTO Courses(title, description,instructor_id) VALUES (?,?,?)';


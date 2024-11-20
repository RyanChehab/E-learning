<?php
include 'connection';

$sql = "SELECT * FROM users where user_type = ?";

$stmt = $conn->prepare($sql);

<?php

$serverName = "localhost";
$dBUsername = "root";
$dBPassword = "";
$dbName = "db_infinity-loop";



$conn = mysqli_connect($serverName, $dBUsername, $dBPassword, $dbName);


if (!$conn) {
    die("Db Connction problem : " . mysqli_connect_error());
} else {

    if (isset($_POST["submit"])) {
        // if (!(empty($name) & empty($email) & empty($message))) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];


        $sql = "INSERT INTO users (usersName,usersEmail,usersMessege) VALUES (?,?,?);";
        $stmt = mysqli_stmt_init($conn);
        if (!mysqli_stmt_prepare($stmt, $sql)) {
            echo "stmtfailed";
            exit();
        }
        mysqli_stmt_bind_param($stmt, "sss", $name, $email, $message);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_close($stmt);
        header('Location: http://localhost/Project-Infinite-Loop-2.0/index.html');
        exit();
        // } else {
        //     echo "You need To Fill All Filds";
        // }
    }
}

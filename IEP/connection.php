<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "iep";

    $connection = mysqli_connect($host, $user, $password, $database);
    if ($connection->connect_error) {
        die("Hubo un error en la conexión a la base de datos." . $connection->connect_error);
    }
?>

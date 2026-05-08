<?php
    session_start();
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
        // limpiar el arreglo para evitar datos maliciosos.
        $_SESSION["candidato"] = array_map("htmlspecialchars", $_POST["candidato"]);
        $_SESSION["canAnswer"] = true;   
        header("Location: iep.php");
        exit;
    }
?>
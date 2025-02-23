<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    // Check if the email already exists
    $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
    $stmt->execute([$email]);
    if ($stmt->rowCount() > 0) {
        echo "Email already registered.";
    } else {
        $stmt = $pdo->prepare('INSERT INTO users (email, password) VALUES (?, ?)');
        if ($stmt->execute([$email, $password])) {
            echo "Registration successful!";
        } else {
            echo "Error in registration.";
        }
    }
}
?>

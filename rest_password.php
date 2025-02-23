<?php
include('db.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $newPassword = password_hash($_POST['new_password'], PASSWORD_BCRYPT);

    $stmt = $pdo->prepare('UPDATE users SET password = ? WHERE email = ?');
    if ($stmt->execute([$newPassword, $email])) {
        echo "Password reset successful!";
    } else {
        echo "Error resetting password.";
    }
}
?>

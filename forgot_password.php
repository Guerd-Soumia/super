<?php
include('db.php');

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];

    // Check if email exists in the database
    $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user) {
        // Generate a reset token (you can use a more secure token generation method)
        $token = bin2hex(random_bytes(50));
        $tokenExpiration = date("Y-m-d H:i:s", strtotime('+1 hour')); // Token valid for 1 hour

        // Insert token into the database
        $stmt = $pdo->prepare('INSERT INTO password_resets (email, token, expires_at) VALUES (?, ?, ?)');
        $stmt->execute([$email, $token, $tokenExpiration]);

        // Send email with password reset link
        $resetLink = "http://yourdomain.com/backend/reset_password.php?token=$token";
        $subject = "Password Reset Request";
        $message = "Click the following link to reset your password: $resetLink";
        $headers = "From: no-reply@yourdomain.com";

        if (mail($email, $subject, $message, $headers)) {
            echo "A password reset link has been sent to your email address.";
        } else {
            echo "There was an error sending the email.";
        }
    } else {
        echo "Email not found.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <link rel="stylesheet" href="../public/styles.css">
</head>
<body>
    <div class="form-container">
        <h2>Forgot Password</h2>
        <form action="forgot_password.php" method="POST">
            <label for="email">Enter your email:</label>
            <input type="email" id="email" name="email" required>

            <button type="submit">Send Reset Link</button>
        </form>
    </div>
</body>
</html>

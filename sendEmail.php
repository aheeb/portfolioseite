<?php
    if($_POST) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        $to = 'andri.heeb@andri-heeb.com'; // E-Mail-Adresse des Empfängers
        $subject = 'Neue Nachricht von Kontaktformular'; // Betreff der E-Mail
        $headers = "From: $email" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion();

        // Mail senden
        if(mail($to, $subject, $message, $headers)) {
            echo "Mail wurde gesendet!";
        } else {
            echo "Mail konnte nicht gesendet werden.";
        }
    } else {
        // Formular anzeigen
        header("Location: index.html");
    }
?>

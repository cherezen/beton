<?php
require_once('phpmailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$text = $_POST['user_text'];
$product = $_POST['user_product'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.jino.ru';                                                                                              // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@beton-n1.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'ПАРОЛЬ'; // Ваш пароль от почты с которой будут отправляться письма
//$mail->SMTPSecure = 'TLS';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('info@beton-n1.ru'); // от кого будет уходить письмо?
$mail->addAddress('info@beton-n1.ru');     // Кому будет уходить письмо
//$mail->addAddress('c0der@ya.ru');               // Name is optional
//$mail->addReplyTo('info@beton-n1.ru', 'Бетон №1');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Заявка в сайта "Бетон №1"';
$mail->Body    = "Имя: {$name}<br>Телефон: {$phone}";

if ($text) {
	$mail->Body .= "<br>Сообщение: {$text}";
}

if ($product) {
	$mail->Body .= "<br>Товар: {$product}";
}

//$mail->AltBody = '';

if(!$mail->send()) {
	echo 'Error';
} else {
	header('location: index.html');
}

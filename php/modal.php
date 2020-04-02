<?php
$mail = $_POST['emailModal'];

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $mail . ",\r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'ricardo.88amj@gmail.com';
$asunto = 'Mensaje de la Página de DW Medios';

mail($para, $asunto, utf8_decode($mensaje), $header);

header("Location:index.html");
?>
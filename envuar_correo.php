<?php
// Recoge los datos del formulario
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

// Dirección de correo a la que se enviará el mensaje
$destinatario = 'jonathan.tabares2222@gmail.com';

// Asunto del correo
$asunto = 'Mensaje de contacto desde el formulario';

// Cuerpo del correo
$contenido = "Nombre: $nombre\n";
$contenido .= "Correo electrónico: $email\n";
$contenido .= "Mensaje:\n$mensaje";

// Enviar el correo
mail($destinatario, $asunto, $contenido);

// Redirigir de vuelta a la página del formulario
header('Location: formulario_contacto.html');
?>

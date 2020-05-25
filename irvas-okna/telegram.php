<?php

/* https://api.telegram.org/bot985437968:AAHSX7Vz7fFwSGpNrWcW-IZgBzz89kw_lKI/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$token = "985437968:AAHSX7Vz7fFwSGpNrWcW-IZgBzz89kw_lKI";
$chat_id = "-409415468";
$arr = array(
  'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Email' => $email
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: index.html');
} else {
  echo "Error";
}
?>

<script language="JavaScript" type="text/javascript">
function changeurl(){eval(self.location="http://127.0.0.1:5500/");}
window.setTimeout("changeurl();",1000);
</script>

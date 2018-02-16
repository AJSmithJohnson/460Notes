<?


session_start();

unset($_SESSION['signed-in']);

header('location:index.php');


?>
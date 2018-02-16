<?

session_start();

function getCurrentUserID(){
    
    if(!array_key_exists('userid', $_SESSION)) return false;
    return $_SESSION['userid'];
}

$uid = getCurrentUserID();

if($uid) {
    echo "you are signed in"
?>

<a href="logout.php">logout</a>

<?
}else{
    echo "you are not signed in"
?>

<a href="login.php">login</a>

<?
}

echo "hello world";

?>
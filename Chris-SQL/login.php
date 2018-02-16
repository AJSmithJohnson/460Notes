<?

function post($key){
    if(array_key_exists($key, $_POST)) return $_POST[$key];
    return null;
}

$pdo = new PDO('mysql:dbname=mega;host=localhost', 'root', 'root');

$user = post('user');
$pass = post('pass');

if(!empty($user)){

    $stmt = $pdo->prepare("SELECT * FROM `users` WHERE `username`=?;");

    $stmt->execute( [$user] );

    if($stmt->rowCount() > 0){
        
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $salt = $row['salt'];
        
        $hash = md5($pass.$salt);
        
        if($hash == $row['password']){
            
        
        echo "you are logged in as ".$user."!";
        session_start();
        $_SESSION['userid'] = $row['id'];
        
        header('location:index.php');
            
        }
    }
    echo "login failed...";
}

?> 

<form method="post" action="login.php">

    <input name="user">
    <input name="pass" type="password">
    <input name="sub" type="submit">
    
</form>
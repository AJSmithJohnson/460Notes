<?

/*session_start();

$_SESSION['signed-in'] = true;

header('location:index.php');//This is a server side redirect*/
    function post($key){
        if(array_key_exists($key, $_POST))return $_POST[$key];
        return null;
    }
  
    $user = post('user');
    $pass = post('pass');
if(!empty($user)){
    
        $pdo = new PDO('mysql:dbname=mega;host=127.0.0.1','root', 'route');



        $stmt = $pdo -> prepare("SELECT * FROM `users` WHERE `username`=?;");

        $stmt -> execute([$user]);//the brackets are used to declare a shorthand array 

        if($stmt->rowCount() > 0){
            
            $row = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $salt = $row['salt'];
            
            $hash = md5($pass.$salt);
            
            if($hash == $row['password']){
                echo "you are logged in!";
            
            $_SESSION['userid'] = $row['id'];
            
            header('location:index.php');
            } 
            
        }else {
            echo "login failed .....";
        }
    
}

?>


    <form method="post" action="login.php">
        <input name="user">
        <input name ="pass" type="password">
        <input type="submit">
        
    </form>
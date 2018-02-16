<?

$pdo = new PDO('mysql:dbname=mega;host=localhost', 'root', 'root');

$stmt = $pdo->prepare("SELECT * FROM `users`;");

$stmt->execute();

while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    echo"<p>".$row['username']."</p>";
}

?>

<form method="post" action="login.php">

    <input name="user">
    <input name="pass" type="password">
    
</form>
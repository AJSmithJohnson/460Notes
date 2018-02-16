<?

    $pdo = new PDO('mysql:dbname=mega;host=127.0.0.1','root', 'route');


    if(!$pdo) echo "connection failed. :(";
    

    $stmt = $pdo->prepare("SELECT * FROM `users`;");

    $stmt ->execute();

    while($row = $stmt->fetch(PDO :: FETCH_ASSOC)){
        echo "<p>".$row['username']."</p>";
    }


?>
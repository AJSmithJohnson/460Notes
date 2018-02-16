<?

    $salt = rand(1000, 9999);

    $pass = "password";

    $pass .=$salt;

    echo $salt."<br>";
    echo md5($pass);


?>
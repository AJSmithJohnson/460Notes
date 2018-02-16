<?

session_start();

/*function isSignedIn() {
if($_SESSION['signed-in' === true]){
    
    echo "You are signed In";
    
} //All session info stored here
    
}*/

function getCurrentUserID() {
    
    if(!array_key_exists('signed-in', $_SESSION))return false;
   // if($_SESSION['signed-in']=== true) return true;
    //return false;
    return $_SESSION['userid'];
    
}
$uid = getCurrentUserID();


if($uid) {
    
    
    echo "<P>You are Signed in!  <a href='logout.php'>Log out</a><P>";
    
    
}else{
    
    echo "<p><a href='login.php'>Login</a></p>";
    
}





//echo "hello world";
//Sessions store cookies on a users pc when they start a session, 
    //Cookies are used to create login systems
    //As a user navigates a website cookies store unique user data in a global variable called session

?>
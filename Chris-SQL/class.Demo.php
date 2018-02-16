<?

class Demo{
    
    var $val = "meow";
    
    static $dog = "beep beep Im a sheep";
    
    const nick = "plz stop";
    
    function doThang(){
        echo $this->val;
    }
    
    static function neato(){
        echo "dickbutt";
    }
    
}

$d = new Demo();
$d->doThang();

Demo::neato();

echo Demo::$dog;

echo Demo::nick;

?>
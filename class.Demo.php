<?

    class Demo{
        
         var $val = "Meooww";
        
        static $dog = "WOOF";
        
        const  DOG = "BORK";
        
        function doSomething(){
           // echo "I did a thing!";
            echo $this->val;
        }
        
        static function neato(){
            
            echo "NEATO!";
        }
        
    }


$d = new Demo();

$d->doSomething();//-> is the access operator!;


echo $d->val;

Demo::neato();//For static members

echo Demo::$dog;

echo qDemo::DOG;

?>

var keys={
    a: false,
    w: false,
    s: false,
    d: false
};

document.addEventListener("keydown", (e)=>{

    if(e.keyCode ==87)keys.w = true;
    if(e.keyCode ==65)keys.a = true;
    if(e.keyCode ==83)keys.s = true;
    if(e.keyCode ==68)keys.d = true;
    
});
document.addEventListener("keyup", (e)=>{

    if(e.keyCode ==87)keys.w = false;
    if(e.keyCode ==65)keys.a = false;
    if(e.keyCode ==83)keys.s = false;
    if(e.keyCode ==68)keys.d = false;
    
});




function Game(w, h){
   //creates a new renderer object /Var not this. means renderer is private
var renderer = new THREE.WebGLRenderer();

renderer.setSize( w, h);

document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(90, w/h, .1, 1000); 
    cam.position.z = 5;
    
    var light = new THREE.DirectionalLight(0xFFFF00, 1);
    light.position.set(5,5 , 5);
    scene.add(light);
    
    
    
    //var controls = new THREE.OrbitControls(cam);
    //controls.addEventListener('change', 'render');
    var boxes=[];
    
   var mesh= new MeshOBJ(scene, "teapot.obj");
    
     this.updateCamera= function(dt){
         var speed = 10;
            if(keys.w){
                
                cam.translateOnAxis(new THREE.Vector3(0, 0, -1),dt*speed);
                
            }
         if(keys.s){
               cam.translateOnAxis(new THREE.Vector3(0, 0, 1),dt*speed);
                
            }
         if(keys.a){
               cam.translateOnAxis(new THREE.Vector3(-1, 0, 0),dt*speed);
                
            }
         if(keys.d){
               cam.translateOnAxis(new THREE.Vector3(1, 0, 0),dt*speed);
                
            }
         cam.lookAt(new THREE.Vector3(0,0, 0));
    
    };
    
    
    var prevTime = 0;
    this.loop=function(time=0){
        var dt=(time-prevTime)/1000;
        prevTime = time;
        
       // boxes.push(new Box(scene));
        
       // controls.update();
        
        for(var i in boxes){
            boxes[i].update(dt);  
            if(boxes[i].isDead){
                scene.remove(boxes[i].dispose());
                boxes.splice(i, 1);
            }
        }
        
        this.updateCamera(dt);
        
        renderer.render(scene, cam);
        requestAnimationFrame((time)=>{
            this.loop(time)});
        
    }
    this.loop();
    
    
    
}

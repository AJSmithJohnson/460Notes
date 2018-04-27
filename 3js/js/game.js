var keys={
    w:false,
    a:false,
    s:false,
    d:false,
}

document.addEventListener("keydown",(e)=>{
    if(e.keyCode===87)keys.w=true;
    if(e.keyCode===65)keys.a=true;
    if(e.keyCode===83)keys.s=true;
    if(e.keyCode===68)keys.d=true;
});

document.addEventListener("keyup",(e)=>{
    if(e.keyCode===87)keys.w=false;
    if(e.keyCode===65)keys.a=false;
    if(e.keyCode===83)keys.s=false;
    if(e.keyCode===68)keys.d=false;
});

function Game(w,h){
    var renderer= new THREE.WebGLRenderer();
    //renderer.shadowMap.enabled=true;
    //renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    renderer.setSize(w, h);
    document.body.appendChild(renderer.domElement);

    var scene=new THREE.Scene();
    var cam=new THREE.PerspectiveCamera(90, w/h, .1, 1000);
    cam.position.z = 5;
    
    var light = new THREE.PointLight(0xFFFF00, 1, 0, 2);
    scene.add(light);
    light.position.set(0,-2,0);
    
    var dirLight = new THREE.DirectionalLight(0xFFFF00, 1);
    scene.add(dirLight);
    dirLight.position.set(5,5,5);
    
    //var controls = new THREE.OrbitControls(cam);
    //controls.update();
    
    var boxes=[];
    
    var mesh = new MeshOBJ(scene, "Skull_Mountain.obj",'');
    
    var pTime = 0;
    this.loop = function(time=0){
        var dt=(time-pTime)/1000;
        pTime = time;
        
        //boxes.push(new Box(scene));
        
        for(var i in boxes){
            boxes[i].update(dt);
            if(boxes[i].isDead){
                boxes[i].dispose();
                boxes.splice(i,1);
            }
        }
        
        renderer.render(scene, cam);
        
        this.updateCam(dt);
        
        requestAnimationFrame((t)=>{this.loop(t)});
        
        //controls.update();
    }
    
    this.updateCam =function(dt){
        
        var speed = 100;
        
        if(keys.w){
            //cam.position.z -= 1*dt;
            cam.translateOnAxis(
                (new THREE.Vector3(0,0,-1)),
                dt*speed
            );
        }
        if(keys.a){
            cam.translateOnAxis(
                (new THREE.Vector3(-1,0,0)),
                dt*speed
            );
        }
        if(keys.s){
            //cam.position.z += 1*dt;
            cam.translateOnAxis(
                (new THREE.Vector3(0,0,1)),
                dt*speed
            );
        }
        if(keys.d){
            cam.translateOnAxis(
                (new THREE.Vector3(1,0,0)),
                dt*speed
            );
        }
        
        cam.lookAt(new THREE.Vector3(0,0,0));
    }
    this.loop();
}
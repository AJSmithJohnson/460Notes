function Box(scene){
    var geom = new THREE.BoxGeometry(1,1,1);
    var mat = new THREE.MeshStandardMaterial({color: 0xFFFFFF});
    var mesh = new THREE.Mesh(geom, mat);
    
    scene.add(mesh);
    
    var vx=Math.random()*10 -5;
    var vz=Math.random()*10 -5;
    var vy=Math.random()*5 +5;
    
    var velocity = new THREE.Vector3(vx,vy,vz);
    this.isDead = false;
   // var velocity2 = new THREE.Vector3(-5, 0, 0);
   // var velocity3 = new THREE.Vector3(5, 0, 0);
    
    var gravity = new THREE.Vector3(0, -10, 0);
    
    this.update=function(dt){
        velocity.addScaledVector(gravity, dt);
         mesh.position.addScaledVector(velocity, dt);
        
        /*if(mesh.position.x == 0){
            mesh.position.addScaledVector( velocity2, dt);
            }else if(mesh.position.x == 10 ) {
                mesh.position.addScaledVector(velocity3, dt);
            }*/
        if(mesh.position.y < -5) this.isDead = true;
    };
    this.dispose = function(){
        scene.remove(mesh);
    }
    
}
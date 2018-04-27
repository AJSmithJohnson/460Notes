function Box(scene){
    var geometry = new THREE.BoxGeometry(1,1,1);
    var mat=new THREE.MeshStandardMaterial({color:0xFF0000});
    var mesh = new THREE.Mesh(geometry,mat);
    
    scene.add(mesh);
    
    var vx = Math.random()*10-5;
    var vz = Math.random()*10-5;
    var vy = Math.random()*5+5;
    
    var veloc = new THREE.Vector3(vx,vy,vz);
    var accel = new THREE.Vector3(0,0,0);
    
    var gravity=new THREE.Vector3(0,-10,0);
    
    this.isDead=false;
    
    this.update = function(dt){
        veloc.addScaledVector(accel, dt);
        veloc.addScaledVector(gravity, dt);
        mesh.position.addScaledVector(veloc, dt);
        
        if(mesh.position.y < -10)this.isDead = true;
    };
    this.dispose = function(){
        scene.remove(mesh);
    };
}
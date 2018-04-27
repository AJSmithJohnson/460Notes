function MeshOBJ(scene, url, mtl){
    var loader = new THREE.OBJLoader();
    
    var obj;
    
    var loaded = false;
    var disposed = false;
    
    new THREE.MTLLoader().load(mtl, (mats)=>{
        
        loader.load(url, (o)=>{
        loaded = true;
        obj = o;
        if(!disposed)scene.add(obj);
    },()=>{},()=>{});
                               
                               },()=>{},()=>{});
    
    
    
    this.dispose=function(){
        disposed = true;
        if(loaded)scene.remove(obj);
    }
}
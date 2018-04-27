function MeshOBJ(url, scene){
    var loader = new THREE.OBJLoader();
    var obj;
    
    var isLoaded = false;
    var isDisposed = false;
    
    loader.load(url, (o)=>{
        isLoaded = true;
        if(!isDisposed){
        obj = o;
        scene.add(o);
        }
    }, 
    ()=>{},
    ()=>{}
    );//End of loader function
    this.dispose = function(){
        isDisposed = true;
        if(isLoaded) scene.remove(obj);
    }
}
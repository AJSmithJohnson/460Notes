var renderer= new THREE.WebGLRenderer();

renderer.setSize(800, 500);

document.body.appendChild(renderer.domElement);

var scene=new THREE.Scene();
var cam=new THREE.PerspectiveCamera(90, 800/500, .1, 1000);
cam.position.z = 5;

var box = new THREE.BoxGeometry(1,1,1);
var mat=new THREE.MeshBasicMaterial({color:0xFFFFFF});
var mesh=new THREE.Mesh(box, mat);

scene.add(mesh);

var pTime=0;
function loop(time=0){
    var dt=(time-pTime)/1000;
    pTime=time;
    mesh.rotation.y+=1*dt;
    renderer.render(scene, cam);
    requestAnimationFrame(loop);
    
}
loop();
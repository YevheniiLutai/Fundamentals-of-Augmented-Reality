//This formula was taked from books
function figureShoeSurface(u, v, vector) {
    let min = -1;
    let max = 1;

    u = u * (max - min + 1) + min;
    v = v * (max - min + 1) + min;

    vector.x = u;
    vector.y = v;
    vector.z = Math.pow(u, 3) / 3 - Math.pow(v, 2) / 2;
};

//This function set setting to position camera
function figureCamera() {
    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(1, 1, 4);
    controls = new THREE.TrackballControls(camera, renderFigure.domElement);
};

//This function set setting to figure material
function figureMaterial() {
    material = new THREE.MeshNormalMaterial({side: 3, wireframe: true})
};

//This function set setting to position camera
function Figure() {
    geometry = new THREE.ParametricGeometry(figureShoeSurface, 100, 100);
    geometry.center();
};

//This function set setting to figure mesh and add contoll for device
function figureMeshAndContolDevice() {
    figureMaterial();
    Figure();

    oneSideMesh = new THREE.Mesh(geometry, material);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.add(oneSideMesh);

    controls = new THREE.DeviceOrientationControls(oneSideMesh);
};

//This function set setting to render this figure
function Render() {
    renderFigure = new THREE.WebGLRenderer({antialias: true});
    renderFigure.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderFigure.domElement);
};

function figureRender() {

    Render();
    figureCamera();
    figureMeshAndContolDevice();

};

//This function set setting to rotation figure and camera
function figureAnimate() {
    requestAnimationFrame(figureAnimate);
    renderFigure.render(scene, camera);
    controls.update();
};
  
figureRender();
figureAnimate();
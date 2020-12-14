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
    material = new THREE.MeshNormalMaterial({side: 1, wireframe: true})
    material1 = new THREE.MeshNormalMaterial({side: 2, wireframe: false})
};

//This function set setting to 
function Figure() {
    geometry = new THREE.ParametricGeometry(figureShoeSurface, 100, 100);
    geometry.center();
};

//This function set setting to figure mesh
function figureMesh() {
    figureMaterial();
    Figure();

    oneSideMesh = new THREE.Mesh(geometry, material);
    secondSideMesh = new THREE.Mesh(geometry, material1);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.add(oneSideMesh);
    scene.add(secondSideMesh);
};

//This function set setting to render this figure
function Render() {
    renderFigure = new THREE.WebGLRenderer({antialias: true});
    renderFigure.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderFigure.domElement);
};

//This function build this figure
function figureRender() {

    Render();

    figureCamera();

    figureMesh();

};

//This function set setting to rotation figure and camera
function figureAnimate() {
        requestAnimationFrame(figureAnimate);
        renderFigure.render(scene, camera);
        controls.update();
};

figureRender();
figureAnimate();
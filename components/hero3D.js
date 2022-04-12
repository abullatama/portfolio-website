import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Hero3D() {
  let camera, scene, renderer;
  let myModel;

  useEffect(() => {
    init();
  });

  const init = () => {
    scene = new THREE.Scene();

    const width = innerWidth;
    const height = innerHeight;

    camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 1000);
    camera.position.set(0, 0, 10);
    scene.add(camera);

    //gltf loader
    const loader = new GLTFLoader().load(
      "models/silent-ash/scene.gltf",
      (result) => {
        myModel = result.scene.children[0];
        myModel.scale.set(2.5, 2.5, 2.5);
        myModel.position.set(0, -5, 0);
        //Code so that the model can cast a shadow
        myModel.traverse(function (node) {
          if (node instanceof THREE.Mesh) {
            node.castShadow = true;
          }
        });
        scene.add(myModel);
      }
    );

    //Create the ground that receives shadows (but does not cast them)
    const planeGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
    const planeMaterial = new THREE.ShadowMaterial({
      opacity: 0.25,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.receiveShadow = true;
    scene.add(plane);
    plane.position.set(0, -6, 0);
    plane.rotation.x = -Math.PI / 2;

    // lightning
    const pointLight1 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight1.position.set(10, 40, 15);
    pointLight1.castShadow = true;
    scene.add(pointLight1);
    // scene.add(new THREE.PointLightHelper(pointLight1, 0.5, 0xff0000));

    //increase softness of the shadow by decreasing the mapsize of light
    pointLight1.shadow.bias = -0.0001;
    pointLight1.shadow.mapSize.width = 1024 * 4;
    pointLight1.shadow.mapSize.height = 1024 * 4;

    const pointLight2 = new THREE.PointLight(0xffffff, 1, 100);
    pointLight2.position.set(-3, 4, 4);
    scene.add(pointLight2);

    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);

    //render the canvas
    const myCanvasElement = document.getElementById("myCanvasElement");

    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: myCanvasElement,
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const hero3DId = document.querySelector("#hero3D");
    hero3DId.appendChild(renderer.domElement);
    renderer.setAnimationLoop(animation);

    //orbit control
    const controls = new OrbitControls(camera, renderer.domElement);
  };

  const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  };

  let frame = 0;
  const animation = (time) => {
    // requestAnimationFrame(animation);
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    // frame = frame <= 100 ? frame + 1 : frame;

    // if (frame <= 100) {
    //   if (myModel) {
    //     myModel.rotation.z += 1;
    //   }
    // }

    if (myModel) {
      myModel.rotation.z += 0.001;
    }

    renderer.render(scene, camera);
  };

  return (
    <div id="hero3D">
      <canvas
        id="myCanvasElement"
        className="max-w-full w-full max-h-[23rem]"
      ></canvas>
    </div>
  );
}

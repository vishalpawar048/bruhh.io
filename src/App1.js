import "./App.css";
import * as THREE from "three";
import { useEffect, useState } from "react";
import { cakeAnimation } from "./Graphic/animation";
// import { FontLoader } from "../node_modules/three/examples/jsm/loaders/FontLoader";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import cake from "./models/cake3d.glb";
import donald from "./models/donald.glb";
import plane from "./models/plane.glb";
import audioFile from "./models/audio.mp3";
import FullScreen from "./Component/FullScreen";
import Particles from "./Component/Particles";
// import background from "./models/background1.glb";

function App() {
  const gui = new GUI();

  useEffect(() => {
    const canvas = document.querySelector("#canvas");

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.outputEncoding = THREE.sRGBEncoding;
    let cakeMixer;
    let clip;
    const fov = 40;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(20, 25, 0);

    const scene = new THREE.Scene();
    
    scene.background = new THREE.Color("#bfe3dd");
    // Particles(THREE, { scene, camera, renderer });
    const axesHelper = new THREE.AxesHelper(10);
    scene.add(axesHelper);

    new OrbitControls(camera, renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    scene.add(directionalLight);
    let mixer;
    const loader = new GLTFLoader();
    let planMixer;

    loader.load(
      cake,
      function (gltf) {
        // console.log(gltf);
        let model = gltf.scene;

        model.position.set(5, 5, 0);

        // model.rotation.set(5, 4.8, 0);
        scene.add(model);
        addDonald();
        addPlane();
        render();
      },
      function (progress) {
        // console.log("% loaded", xhr);
      },
      function (error) {
        console.log("error");
      }
    );

    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function () {
      console.log("audioFile", audioFile);
      let audio = new Audio(audioFile);
      audio
        .play()
        .then((res) => {
          FullScreen(canvas);
        })
        .catch((e) => {
          console.log(e);
        });
    });

    let addDonald = () => {
      loader.load(
        donald,
        function (gltf) {
          console.log(">>>>>>>>>", gltf.animations[0]);
          let model = gltf.scene;
          model.position.set(7.5, 8, 0);
          model.rotation.set(0, 1.5, 0);
          scene.add(model);
          mixer = new THREE.AnimationMixer(model);
          const listener = new THREE.AudioListener();
          camera.add(listener);

          mixer.clipAction(gltf.animations[0]).play();
          render();
        },
        function (progress) {
          // console.log("% loaded", xhr);
        },
        function (error) {
          console.log(error);
        }
      );
    };

    let addPlane = () => {
      loader.load(
        plane,
        function (gltf) {
          console.log("plane-----", gltf);
          let model = gltf.scene;
          model.position.set(0, 8, -15);
          // model.rotation.set(0, 0, 0);
          scene.add(model);
          planMixer = new THREE.AnimationMixer(model);
          const listener = new THREE.AudioListener();
          camera.add(listener);
          // gltf.animations.forEach((animation,i) => {
          //   console.log(">>>>animation",i, animation);
          //   planMixer.clipAction(animation).play();
          // });
          // planMixer.clipAction(gltf.animations[0]).play();
          planMixer.clipAction(gltf.animations[1]).play();
          // planMixer.clipAction(gltf.animations[2]).play();

          render();
        },
        function (progress) {
          // console.log("% loaded", xhr);
        },
        function (error) {
          console.log(error);
        }
      );
    };

    // loader.load(
    //   background,
    //   function (gltf) {
    //     console.log(gltf.scene);
    //     let model = gltf.scene;
    //     // model.position.set(0, 1.2, 0);
    //     // model.rotation.set(0, -5, 0);
    //     scene.add(model);
    //     // mixer = new THREE.AnimationMixer(model);
    //     // mixer.clipAction(gltf.animations[0]).play();
    //     render();
    //   },
    //   function (progress) {
    //     // console.log("% loaded", xhr);
    //   },
    //   function (error) {
    //     console.log(error);
    //   }
    // );

    const clock = new THREE.Clock();
    const render = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const delta = clock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }
      if (planMixer) {
        planMixer.update(delta);
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(render);

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
    };
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
    render();
  }, []);

  return <div className="App"></div>;
}

export default App;

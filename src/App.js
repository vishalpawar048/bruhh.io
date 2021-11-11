import "./App.css";
import * as THREE from "three";
import { useEffect, useState } from "react";
// import { FontLoader } from "../node_modules/three/examples/jsm/loaders/FontLoader";
import { GUI } from "three/examples/jsm/libs/dat.gui.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import cake from "./models/cake3d.glb";
import donald from "./models/donald.glb";
import plane from "./models/plane.glb";
import Particles from "./Component/Particles";
import Skybox from "./Component/Skybox";
import heart from "./models/heart.glb";
import Plane from "./Component/Plane";
import CharacterControls from "./Component/Character";
import MaleCharacter from "./models/MaleCharacter.glb";
import { KeyDisplay } from "./Component/utils";
import book from "./models/book.glb";
import snow from "./models/snow.png";
import audio from "./Component/Audio";
import Share from "./Component/Share";

function App() {
  const gui = new GUI();

  useEffect(() => {
    var w = window.innerWidth;
    var h = window.innerHeight;
    const canvas = document.querySelector("#canvas");

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.outputEncoding = THREE.sRGBEncoding;

    let planeMixer;
    let donaldDanceMixer;
    let heartMixer;

    const fov = 80;
    const aspect = 2; // the canvas default
    const near = 1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(20, 2, 0);
    camera.rotateY = 100;

    // const cameraFolder = gui.addFolder("Camera");
    // cameraFolder.add(camera.position, "z", 0, 10);
    // cameraFolder.open();

    const scene = new THREE.Scene();
    let lightProbe = new THREE.LightProbe();
    scene.add(lightProbe);

    // new OrbitControls(camera, renderer.domElement);
    // CONTROLS
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;
    orbitControls.minDistance = 5;
    orbitControls.maxDistance = 15;
    orbitControls.enablePan = false;
    orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
    orbitControls.update();
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 5);
    scene.add(directionalLight);
    Plane(THREE, scene);
    Particles(THREE, scene, renderer, camera);
    Skybox(THREE, scene);
    // CharacterControls(THREE, scene);

    const loader = new GLTFLoader();

    // loader.load(
    //   cake,
    //   function (gltf) {
    //     // console.log(gltf);
    //     let model = gltf.scene;
    //     model.children[2].material.color.set("#630000");
    //     // model.children[3].material.color.set("#630000");
    //     model.position.set(0, -10, 100);

    //     // model.rotation.set(5, 4.8, 0);
    //     scene.add(model);
    //     addDonald();
    //     // addPlane();
    //     render();
    //   },
    //   function (progress) {
    //     // console.log("% loaded", xhr);
    //   },
    //   function (error) {
    //     console.log("error");
    //   }
    // );

    loader.load(
      heart,
      function (gltf) {
        let model = gltf.scene;
        model.position.set(0, -5, 0);
        renderer.outputEncoding = true;
        gltf.scene.scale.set(100, 100, 100);
        // const listener = new THREE.AudioListener();
        // camera.add(listener);
        scene.add(model);
        heartMixer = new THREE.AnimationMixer(model);
        heartMixer.clipAction(gltf.animations[0]).play();
        // addDonald();
        // addPlane();
        render();
      },
      function (progress) {
        // console.log("% loaded", xhr);
      },
      function (error) {
        console.log("error");
      }
    );

    const light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set(5, 5, 0);
    scene.add(light);

    let addDonald = () => {
      loader.load(
        donald,
        function (gltf) {
          let model = gltf.scene;
          model.position.set(0, -10, 0);
          model.rotation.set(0, 1.5, 0);
          scene.add(model);
          donaldDanceMixer = new THREE.AnimationMixer(model);

          donaldDanceMixer.clipAction(gltf.animations[0]).play();
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

    // MODEL WITH ANIMATIONS
    // var caracterMixer;
    // let animationsMap;
    // const keysPressed = {};
    // let characterControl;
    // new GLTFLoader().load(MaleCharacter, function (gltf) {
    //   const model = gltf.scene;
    //   console.log(">>>>>.gltf", gltf);
    //   model.traverse(function (object) {
    //     if (object.isMesh) object.castShadow = true;
    //   });
    //   console.log(w, h);
    //   model.position.y = -12;
    //   model.rotation.y = Math.PI / 2;
    //   model.scale.set(5, 5, 5);
    //   scene.add(model);
    //   const gltfAnimations = gltf.animations;
    //   caracterMixer = new THREE.AnimationMixer(model);
    //   animationsMap = new Map();
    //   gltfAnimations
    //     .filter((a) => a.name != "TPose")
    //     .forEach((a) => {
    //       animationsMap.set(a.name, caracterMixer.clipAction(a));
    //     });

    //   document.addEventListener(
    //     "keydown",
    //     (event) => {
    //       keysPressed[event.key.toLowerCase()] = true;
    //       console.log("keysPressed", keysPressed);
    //     },
    //     false
    //   );
    //   document.addEventListener(
    //     "keyup",
    //     (event) => {
    //       keysPressed[event.key.toLowerCase()] = false;
    //       console.log("keysPressed", keysPressed);
    //     },
    //     false
    //   );
    //   let currentAction = "Idle";
    //   let fadeDuration = 2;
    //   let rotateQuarternion = new THREE.Quaternion();
    //   let rotateAngle = new THREE.Vector3(0, 1, 0);
    //   var angleYCameraDirection = Math.atan2(
    //     camera.position.x - model.position.x,
    //     camera.position.z - model.position.z
    //   );
    //   let directionOffset = 0;
    //   characterControl = (keysPressed) => {
    //     directionOffset = -Math.PI;
    //     if (keysPressed.arrowup) {
    //       const prevplay = animationsMap.get("Idle");
    //       prevplay.stop();
    //       const toPlay = animationsMap.get("Walk");
    //       toPlay.play();
    //     } else if (keysPressed.arrowright) {
    //       directionOffset = -Math.PI / 4;
    //       rotateQuarternion.setFromAxisAngle(
    //         rotateAngle,
    //         angleYCameraDirection + directionOffset
    //       );
    //       model.quaternion.rotateTowards(rotateQuarternion, 0.2);
    //     } else if (keysPressed.arrowleft) {
    //       directionOffset = Math.PI / 4;
    //       rotateQuarternion.setFromAxisAngle(
    //         rotateAngle,
    //         angleYCameraDirection + directionOffset
    //       );
    //       model.quaternion.rotateTowards(rotateQuarternion, 0.2);
    //     } else if (keysPressed.arrowdown) {
    //       directionOffset = Math.PI;
    //       rotateQuarternion.setFromAxisAngle(
    //         rotateAngle,
    //         angleYCameraDirection + directionOffset
    //       );
    //       model.quaternion.rotateTowards(rotateQuarternion, 0.2);
    //     } else {
    //       console.log(">>>>>>>>>>>>2", currentAction);
    //       const prevplay = animationsMap.get("Idle");
    //       prevplay.stop();
    //       const toPlay = animationsMap.get("Walk");
    //       toPlay.play();
    //     }
    //   };
    // });

    // MODEL WITH ANIMATIONS
    var characterControls;
    // new GLTFLoader().load(MaleCharacter, function (gltf) {
    //   const model = gltf.scene;
    //   model.position.y = -10;
    //   model.rotation.y = Math.PI / 2;
    //   model.scale.set(5, 5, 5);
    //   scene.add(model);

    //   const gltfAnimations = gltf.animations;
    //   const mixer = new THREE.AnimationMixer(model);
    //   const animationsMap = new Map();
    //   gltfAnimations
    //     .filter((a) => a.name != "TPose")
    //     .forEach((a) => {
    //       animationsMap.set(a.name, mixer.clipAction(a));
    //     });

    //   characterControls = CharacterControls(
    //     model,
    //     mixer,
    //     animationsMap,
    //     orbitControls,
    //     camera,
    //     "Idle"
    //   );
    // });

    //fpx loader

    // const fpxloader = new FBXLoader();

    // loader.load('mremireh_o_desbiens.fbx', (fbx) => {
    //   fbx.scale.setScalar(0.1);
    //   fbx.traverse(c => {
    //     c.castShadow = true;
    //   });

    //   this._target = fbx;
    //   this._params.scene.add(this._target);

    //   this._mixer = new THREE.AnimationMixer(this._target);

    //   this._manager = new THREE.LoadingManager();
    //   this._manager.onLoad = () => {
    //     this._stateMachine.SetState('idle');
    //   };

    //   const _OnLoad = (animName, anim) => {
    //     const clip = anim.animations[0];
    //     const action = this._mixer.clipAction(clip);

    //     this._animations[animName] = {
    //       clip: clip,
    //       action: action,
    //     };
    //   };

    //   const loader = new FBXLoader(this._manager);
    //   loader.setPath('./resources/zombie/');
    //   loader.load('walk.fbx', (a) => { _OnLoad('walk', a); });
    //   loader.load('run.fbx', (a) => { _OnLoad('run', a); });
    //   loader.load('idle.fbx', (a) => { _OnLoad('idle', a); });
    //   loader.load('dance.fbx', (a) => { _OnLoad('dance', a); });
    // });

    // CONTROL KEYS
    const keysPressed = {};
    const keyDisplayQueue = new KeyDisplay();
    document.addEventListener(
      "keydown",
      (event) => {
        keyDisplayQueue.down(event.key);
        if (event.shiftKey && characterControls) {
          characterControls.switchRunToggle();
        } else {
          keysPressed[event.key.toLowerCase()] = true;
        }
      },
      false
    );
    document.addEventListener(
      "keyup",
      (event) => {
        keyDisplayQueue.up(event.key);
        keysPressed[event.key.toLowerCase()] = false;
      },
      false
    );

    const clock = new THREE.Clock();
    const render = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      const delta = clock.getDelta();

      if (donaldDanceMixer) {
        donaldDanceMixer.update(delta);
      }
      if (planeMixer) {
        planeMixer.update(delta);
      }
      if (heartMixer) {
        heartMixer.update(delta * 0.25);
      }
      // if (caracterMixer) {
      //   caracterMixer.update(delta);
      //   characterControl(keysPressed);
      // }
      if (characterControls) {
        console.log(">>>>>characterControls", characterControls.update);
        characterControls(delta, keysPressed);
      }
      orbitControls.update();
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

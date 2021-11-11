import posx from "../models/Skyboxs/posx.jpg";
import negx from "../models/Skyboxs/negx.jpg";
import posy from "../models/Skyboxs/posy.jpg";
import negy from "../models/Skyboxs/negy.jpg";
import posz from "../models/Skyboxs/posz.jpg";
import negz from "../models/Skyboxs/negz.jpg";

export default function Skybox(THREE, scene) {
  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load([posx, negx, posy, negy, posz, negz]);
  
  scene.background = texture;
}

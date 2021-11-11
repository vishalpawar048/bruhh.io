import * as THREE from "three";

let cakeAnimation = (model) => {
  const xAxis = new THREE.Vector3(0, 1, 0);
  const qInitial = new THREE.Quaternion().setFromAxisAngle(xAxis, 0);
  const qFinal = new THREE.Quaternion().setFromAxisAngle(xAxis, Math.PI);
  const quaternionKF = new THREE.QuaternionKeyframeTrack(
    ".quaternion",
    [0, 1, 2],
    [
      qInitial.x,
      qInitial.y,
      qInitial.z,
      qInitial.w,
      qFinal.x,
      qFinal.y,
      qFinal.z,
      qFinal.w,
      qInitial.x,
      qInitial.y,
      qInitial.z,
      qInitial.w,
    ]
  );

  const clip = new THREE.AnimationClip("default", 3, [quaternionKF]);
  // setup the THREE.AnimationMixer
  let cakeMixer = new THREE.AnimationMixer(model);
  return { cakeMixer, clip };
};

export { cakeAnimation };

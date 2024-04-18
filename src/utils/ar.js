import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton';

export const renderLightersInAR = (leazesLighters) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const arButton = ARButton.createButton(renderer, {
    requiredFeatures: ['hit-test'],
  });
  document.body.appendChild(arButton);

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  leazesLighters.forEach((lighter) => {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(lighter.latitude, lighter.longitude, 0);
    scene.add(cube);
  });

  animate();
};
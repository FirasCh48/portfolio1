import React, { useEffect, useRef, useState } from 'react';
import { X, Gamepad2, RotateCcw, Cpu, Sparkles, Box, Info } from 'lucide-react';
import * as THREE from 'three';

interface Warshatin3DModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Warshatin3DModal: React.FC<Warshatin3DModalProps> = ({ isOpen, onClose }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [controllerColor, setControllerColor] = useState('#3b82f6');
  const [activeButton, setActiveButton] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen || !mountRef.current) return;
    const currentMount = mountRef.current;
    const width = currentMount.clientWidth;
    const height = 400;

    // Three.js 3D Gamepad Simulation Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f172a);

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.set(0, 4, 8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    // Group for controller
    const gamepadGroup = new THREE.Group();
    scene.add(gamepadGroup);

    // Controller Main Body (SolidWorks CAO simulation)
    const bodyGeo = new THREE.BoxGeometry(4.5, 0.8, 2.4);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(controllerColor),
      roughness: 0.3,
      metalness: 0.5
    });
    const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
    gamepadGroup.add(bodyMesh);

    // Left & Right Grips
    const gripGeo = new THREE.CylinderGeometry(0.8, 0.9, 2.2, 32);
    const gripMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.7 });

    const leftGrip = new THREE.Mesh(gripGeo, gripMat);
    leftGrip.rotation.z = Math.PI / 6;
    leftGrip.position.set(-2.2, -0.4, 0);
    gamepadGroup.add(leftGrip);

    const rightGrip = new THREE.Mesh(gripGeo, gripMat);
    rightGrip.rotation.z = -Math.PI / 6;
    rightGrip.position.set(2.2, -0.4, 0);
    gamepadGroup.add(rightGrip);

    // Joysticks
    const stickGeo = new THREE.CylinderGeometry(0.5, 0.3, 0.6, 32);
    const stickMat = new THREE.MeshStandardMaterial({ color: 0x475569 });

    const leftStick = new THREE.Mesh(stickGeo, stickMat);
    leftStick.position.set(-1.2, 0.6, 0.3);
    gamepadGroup.add(leftStick);

    const rightStick = new THREE.Mesh(stickGeo, stickMat);
    rightStick.position.set(1.2, 0.6, 0.3);
    gamepadGroup.add(rightStick);

    // Action Buttons
    const buttonGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const buttonMat = new THREE.MeshStandardMaterial({ color: 0xef4444 });
    const btnA = new THREE.Mesh(buttonGeo, buttonMat);
    btnA.position.set(1.8, 0.5, -0.4);
    gamepadGroup.add(btnA);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0x60a5fa, 2);
    light1.position.set(5, 10, 5);
    scene.add(light1);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      gamepadGroup.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isOpen, controllerColor]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Warshatin 3D – Simulateur de Manette CAO</h3>
              <p className="text-xs text-slate-400">PFE CGI Studio • Modelisation SolidWorks & Unity 3D</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 3D WebGL Canvas */}
        <div className="relative">
          <div ref={mountRef} className="w-full h-[400px]" />
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700 text-xs text-blue-400 font-mono flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>WebGL 3D Interactive Render</span>
          </div>
        </div>

        {/* Controls Panel */}
        <div className="p-6 border-t border-slate-800 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Box className="w-4 h-4 text-purple-400" />
              <span>Personnaliser la couleur d'impression 3D (UltiMaker Cura) :</span>
            </div>
            <div className="flex items-center gap-2">
              {['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'].map((color) => (
                <button
                  key={color}
                  onClick={() => setControllerColor(color)}
                  className={`w-7 h-7 rounded-full border-2 transition-transform ${
                    controllerColor === color ? 'scale-125 border-white' : 'border-transparent'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-1">
            <div className="font-bold text-white flex items-center gap-1.5">
              <Info className="w-4 h-4 text-blue-400" />
              <span>À propos du projet Warshatin 3D :</span>
            </div>
            <p>
              Conçu lors du stage PFE chez CGI Studio (Nabeul). Firas a entièrement modélisé les boîtiers CAO sous <strong>SolidWorks</strong>, simulé le circuit électronique, imprimé la manette en 3D sous <strong>UltiMaker Cura</strong>, et développé le jeu 3D multijoueur sous <strong>Unity & C#</strong> avec animations <strong>Blender & Mixamo</strong>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

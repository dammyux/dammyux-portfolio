"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Central Multifaceted Studio Geometry (Icosahedron + Torus Knot rings)
    const isDark = resolvedTheme === "dark";

    const geomMain = new THREE.IcosahedronGeometry(1.6, 1);
    const matMain = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x0f1118 : 0xf0fdf4,
      metalness: 0.85,
      roughness: 0.15,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: true,
      transparent: true,
      opacity: 0.9,
    });
    const mainMesh = new THREE.Mesh(geomMain, matMain);
    group.add(mainMesh);

    // 2. Glowing Green Wireframe Overlay
    const geomWire = new THREE.IcosahedronGeometry(1.62, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.6 : 0.4,
    });
    const wireMesh = new THREE.Mesh(geomWire, wireMat);
    group.add(wireMesh);

    // 3. Orbital Ring 1
    const ringGeom1 = new THREE.TorusGeometry(2.4, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x00ff87,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // 4. Orbital Ring 2
    const ringGeom2 = new THREE.TorusGeometry(2.9, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x10b981 : 0x059669,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 5. Floating Particle Cloud
    const particleCount = 70;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 8;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: 0x00ff87,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    group.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.7 : 1.2);
    scene.add(ambientLight);

    const greenPointLight = new THREE.PointLight(0x00ff87, 4, 10);
    greenPointLight.position.set(3, 3, 3);
    scene.add(greenPointLight);

    const purplePointLight = new THREE.PointLight(0x10b981, 2, 10);
    purplePointLight.position.set(-3, -2, 2);
    scene.add(purplePointLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.8;
      targetRotationX = -mouseY * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle idle rotation
      mainMesh.rotation.y += 0.005;
      mainMesh.rotation.x += 0.003;
      wireMesh.rotation.y += 0.005;
      wireMesh.rotation.x += 0.003;

      ring1.rotation.z += 0.004;
      ring2.rotation.x += 0.003;
      particles.rotation.y = elapsedTime * 0.02;

      // Mouse Lerp Smooth Transition
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;

      // Floating wave
      group.position.y = Math.sin(elapsedTime * 1.5) * 0.15;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      geomMain.dispose();
      matMain.dispose();
      geomWire.dispose();
      wireMat.dispose();
      ringGeom1.dispose();
      ringMat1.dispose();
      ringGeom2.dispose();
      ringMat2.dispose();
      particleGeom.dispose();
      particleMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [resolvedTheme]);

  if (!isSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-brand/30 to-emerald-500/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[550px] flex items-center justify-center">
      {/* Background Soft Glow */}
      <div className="absolute w-72 h-72 rounded-full bg-brand/15 blur-[120px] pointer-events-none -z-10" />

      {/* Canvas container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />
    </div>
  );
}

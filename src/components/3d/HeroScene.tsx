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
    const width = container.clientWidth || 360;
    const height = container.clientHeight || 360;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 5.5;

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

    const isDark = resolvedTheme === "dark";

    // 1. Central Multifaceted Studio Geometry (Balanced scale: 1.35)
    const geomMain = new THREE.IcosahedronGeometry(1.35, 1);
    const matMain = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x0c0e14 : 0xeaf5ec,
      metalness: isDark ? 0.8 : 0.2,
      roughness: isDark ? 0.2 : 0.3,
      clearcoat: 1.0,
      clearcoatRoughness: 0.15,
      wireframe: false,
      flatShading: true,
      transparent: true,
      opacity: isDark ? 0.92 : 0.85,
    });
    const mainMesh = new THREE.Mesh(geomMain, matMain);
    group.add(mainMesh);

    // 2. Glowing Green Wireframe Overlay
    const geomWire = new THREE.IcosahedronGeometry(1.37, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: isDark ? 0x00ff87 : 0x059669,
      wireframe: true,
      transparent: true,
      opacity: isDark ? 0.55 : 0.45,
    });
    const wireMesh = new THREE.Mesh(geomWire, wireMat);
    group.add(wireMesh);

    // 3. Orbital Ring 1
    const ringGeom1 = new THREE.TorusGeometry(2.1, 0.018, 16, 80);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x00ff87 : 0x10b981,
      transparent: true,
      opacity: isDark ? 0.4 : 0.3,
    });
    const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    group.add(ring1);

    // 4. Orbital Ring 2
    const ringGeom2 = new THREE.TorusGeometry(2.5, 0.012, 16, 80);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: isDark ? 0x10b981 : 0x047857,
      transparent: true,
      opacity: isDark ? 0.25 : 0.2,
    });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // 5. Floating Particle Cloud
    const particleCount = 50;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 7;
      positions[i + 1] = (Math.random() - 0.5) * 7;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }

    particleGeom.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: isDark ? 0x00ff87 : 0x059669,
      size: 0.045,
      transparent: true,
      opacity: isDark ? 0.6 : 0.45,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    group.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.8 : 1.3);
    scene.add(ambientLight);

    const greenPointLight = new THREE.PointLight(0x00ff87, isDark ? 3.5 : 2.5, 10);
    greenPointLight.position.set(3, 3, 3);
    scene.add(greenPointLight);

    const fillPointLight = new THREE.PointLight(0x10b981, isDark ? 2 : 1.5, 10);
    fillPointLight.position.set(-3, -2, 2);
    scene.add(fillPointLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((event.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = mouseX * 0.6;
      targetRotationX = -mouseY * 0.4;
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
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Continuous subtle idle rotation
      mainMesh.rotation.y += 0.004;
      mainMesh.rotation.x += 0.0025;
      wireMesh.rotation.y += 0.004;
      wireMesh.rotation.x += 0.0025;

      ring1.rotation.z += 0.003;
      ring2.rotation.x += 0.0025;
      particles.rotation.y = elapsedTime * 0.015;

      // Mouse Lerp Smooth Transition
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.04;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.04;

      // Gentle floating oscillation
      group.position.y = Math.sin(elapsedTime * 1.2) * 0.12;

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
        <div className="w-44 h-44 rounded-full bg-gradient-to-tr from-brand/30 to-emerald-500/10 blur-3xl" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">
      {/* Background Ambient Glow */}
      <div className="absolute w-64 h-64 rounded-full bg-brand/12 blur-[100px] pointer-events-none -z-10" />

      {/* Canvas container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />
    </div>
  );
}

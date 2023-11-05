"use client";
import { useEffect, useRef } from "react";

export const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef?.current) return;

    const canvas = canvasRef?.current;
    const context = canvas?.getContext("2d");

    // when mounting.
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

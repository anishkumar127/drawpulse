"use client";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useRef } from "react";

export const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeMenuItem = useAppSelector((state)=>state?.menu?.activeMenuItem);
  const {color,size} = useAppSelector((state)=>state?.toolbox[activeMenuItem]);

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

"use client";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useRef } from "react";

export const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeMenuItem = useAppSelector((state) => state?.menu?.activeMenuItem);
  const { color, size } = useAppSelector(
    (state) => state?.toolbox[activeMenuItem]
  );

  useEffect(() => {
    if (!canvasRef?.current) return;

    const canvas: HTMLCanvasElement = canvasRef?.current;
    const context: CanvasRenderingContext2D | null | any =
      canvas?.getContext("2d");
    const changeConfig = () => {
      if (context) {
        context.strokeStyle = color;
        context.lineWidth = size;
      }
    };
    changeConfig();
  }, [color, size]);

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

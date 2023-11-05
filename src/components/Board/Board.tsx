"use client";
import { useAppSelector } from "@/store/hooks";
import { useEffect, useLayoutEffect, useRef } from "react";

export const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldDraw = useRef<HTMLCanvasElement | boolean>(false);
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

  // before browser paint.
  useLayoutEffect(() => {
    // run before the useEffect , before paint screen.
    if (!canvasRef?.current) return;

    const canvas = canvasRef?.current;
    const context = canvas?.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const onMouseDown = (e: MouseEvent) => {
      shouldDraw.current = true;
      context?.beginPath();
      context?.moveTo(e?.clientX, e?.clientY);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!shouldDraw.current) return;
      context?.lineTo(e?.clientX, e?.clientY);
      context?.stroke();
    };
    const onMouseUp = (e: MouseEvent) => {
      shouldDraw.current = false;
    };

    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp);
    return () => {
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseup", onMouseUp);
    };
  }, []);
  return <canvas ref={canvasRef}></canvas>;
};

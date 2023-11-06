"use client";
import { MENU_ITMES } from "@/constants";
import { onActionItem } from "@/store/features/menuSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useLayoutEffect, useRef } from "react";

export const Board = () => {
  const dispatch = useAppDispatch();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldDraw = useRef<HTMLCanvasElement | boolean>(false);
  const { activeMenuItem, actionMenuItem } = useAppSelector(
    (state) => state?.menu
  );
  const { color, size } = useAppSelector(
    (state) => state?.toolbox[activeMenuItem]
  );

  // download png
  useEffect(() => {
    if (!canvasRef?.current) return;
    const canvas: HTMLCanvasElement = canvasRef?.current;
    const context: CanvasRenderingContext2D | null | any =
      canvas?.getContext("2d");

    if (actionMenuItem === MENU_ITMES.DOWNLOAD) {
      const URL = canvas.toDataURL();
      const anchor = document.createElement("a");
      anchor.href = URL;
      anchor.download = "sketch.png";
      anchor.click();
    }
    // return ()=>{
    dispatch(onActionItem(null));
    // }
  }, [actionMenuItem, dispatch]);

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
    const beginPath = (x: number, y: number) => {
      // console.log(typeof x, y);
      context?.beginPath();
      context?.moveTo(x, y);
    };
    const drawLine = (x: number, y: number) => {
      context?.lineTo(x, y);
      context?.stroke();
    };
    const onMouseDown = (e: MouseEvent) => {
      shouldDraw.current = true;
      beginPath(e?.clientX, e?.clientY);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!shouldDraw.current) return;
      drawLine(e?.clientX, e?.clientY);
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

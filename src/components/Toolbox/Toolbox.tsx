'use client';
export const Toolbox = () => {
  const updateBrushSize = () => {};
  return (
    <div>
      <h4>Stroke Color</h4>
      <div>
        <div />
      </div>

      {/* Brush Size */}
      <div>
        <h4>Brush Size</h4>
        <div>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
    </div>
  );
};

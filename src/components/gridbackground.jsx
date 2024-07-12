import React from "react";
 
export function GridBackground() {
  return (
    <div className="h-full w-full absolute dark:bg-black bg-black  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] flex items-center justify-center absolute top-0 left-0 ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
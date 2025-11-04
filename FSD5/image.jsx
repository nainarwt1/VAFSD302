import React, { useState } from "react";

export default function RotateImage() {
  const [angle, setAngle] = useState(0);

  const rotateImage = (deg) => {
    setAngle((prev) => prev + deg);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">🌀 Image Rotator</h1>

      {/* Image */}
      <img
        src="https://via.placeholder.com/200"
        alt="rotating"
        className="transition-transform duration-500 ease-in-out"
        style={{ transform: rotate(${angle}deg) }}
      />

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => rotateImage(45)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Rotate +45°
        </button>

        <button
          onClick={() => rotateImage(-45)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Rotate -45°
        </button>

        <button
          onClick={() => setAngle(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Reset
        </button>
      </div>

      <p className="mt-4 text-gray-700 font-medium">Current angle: {angle}°</p>
    </div>
  );
}
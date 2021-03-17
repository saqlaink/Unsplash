import React, { useRef } from "react";
import useTFClassify from "../utils/hooks/useTFClassify";

export default function Tensorflow() {
  const imageRef = useRef();
  const { predict, predictions, isLoading } = useTFClassify();

  return (
    <div className="flex justify-center">
      <div className="w-1/3">
        <h1 className="text-center mr-14 font-bold mt-2">TensorFlow Example</h1>
        <br></br>
        <img
          src="https://images.unsplash.com/photo-1572360620839-a02312482daf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
          width="400"
          crossOrigin="anonymous"
          ref={imageRef}
        />
        <div className="text-center my-5">
          {predictions.length > 0 &&
            predictions.map((prediction) => (
              <div className="flex justify-between text-sm">
                <p>{prediction.className}</p>
                <p>{Math.floor(prediction.probability * 100)} %</p>
              </div>
            ))}

          <button
            className="p-2 rounded bg-gray-900 text-white w-64 mr-20"
            onClick={() => predict(imageRef.current)}
          >
            {isLoading && "⏳"}
            {!isLoading && "Predict Result"}
          </button>
        </div>
      </div>
    </div>
  );
}

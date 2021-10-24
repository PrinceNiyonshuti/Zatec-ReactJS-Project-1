import React from "react";

function Plane(props) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://source.unsplash.com/featured/1600x900/?jet"
        alt="{props.name}"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">
          <b> Manufactured From :</b> {props.country}
        </p>
        <p className="text-gray-700 text-base">
          <b> Jet Model :</b> {props.model}
        </p>
        <p className="text-gray-700 text-base">
          <b> Released In :</b> {props.year}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{props.model}
        </span>
        <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{props.country}
        </span>
      </div>
    </div>
  );
}

export default Plane;

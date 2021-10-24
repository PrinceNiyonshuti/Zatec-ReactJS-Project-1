import React from "react";
import Car from "./Car";

function CarList(props) {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl mb-2">Cars List</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Car model="SUV" name="BMW" color="Black" />
        <Car model="SUV" name="Porsce" color="Red" />
        <Car model="Sport Car" name="Ferrari" color="Red" />
        <Car model="Sport Car" name="Ford GT" color=" Yellow with black stripes"
        />
      </div>
    </div>
  );
}
export default CarList;

"use client";

import { Productor } from "@/types";

interface InfoProps {
  data: Productor;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      {/* Nombre del productor */}
      <h1 className="text-3xl font-bold text-gray-900">{data.pronombre}</h1>

      {/* Precio */}
      <div className="mt-3 flex items-end justify-between">
        <h2 className="text-2xl text-gray-900">
        </h2>
      </div>

      {/* Descripción */}
      <hr className="my-4" />
      <p className="text-gray-700">{data.prodescripcion}</p>
          
    </div>
    
  );
};

export default Info;

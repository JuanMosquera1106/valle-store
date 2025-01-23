"use client";

import { useState } from "react";

interface FiltersProps {
  producers: string[]; // Lista de productores únicos
  onFilter: (filters: { producer?: string; minPrice?: number; maxPrice?: number }) => void;
}

const Filters: React.FC<FiltersProps> = ({ producers, onFilter }) => {
  const [selectedProducer, setSelectedProducer] = useState<string | undefined>(undefined);
  const [minPrice, setMinPrice] = useState<number | undefined>(undefined);
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);

  const applyFilters = () => {
    onFilter({ producer: selectedProducer, minPrice, maxPrice });
  };

  return (
    <div className="p-4 border rounded-md border-white">
      <h3 className="font-bold text-lg mb-2">Filtros</h3>
      
      {/* Filtro por Productor */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Productor</label>
        <select
          className="w-full border rounded-md p-2 bg-greenButtonValle"
          value={selectedProducer || ""}
          onChange={(e) => setSelectedProducer(e.target.value || undefined)}
        >
          <option value="">Todos</option>
          {producers.map((producer) => (
            <option key={producer} value={producer}>
              {producer}
            </option>
          ))}
        </select>
      </div>

      {/* Filtro por Precio */}
      <div className="mb-4">
        <label className="block font-bold mb-2">Precio Mínimo</label>
        <input
          type="number"
          className="w-full border rounded-md p-2 bg-greenButtonValle"
          placeholder="Ej: 100"
          value={minPrice || ""}
          onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold mb-2">Precio Máximo</label>
        <input
          type="number"
          className="w-full border rounded-md p-2 bg-greenButtonValle"
          placeholder="Ej: 500"
          value={maxPrice || ""}
          onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
        />
      </div>

      {/* Botón para Aplicar Filtros */}
      <button
        onClick={applyFilters}
        className="w-full bg-black text-white py-2 rounded-md hover:bg-greenButtonValle transition bg-greenValle"
      >
        Aplicar Filtros
      </button>
    </div>
  );
};

export default Filters;

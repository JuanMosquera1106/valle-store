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
    <div className="p-4 border rounded-md border-white bg-white shadow-md w-full max-w-lg mx-auto">

      {/* Layout responsive */}
      <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-1">
        {/* Filtro por Productor */}
        <div>
          <label className="block font-bold mb-2 text-sm text-greenValle">Productor</label>
          <select
            className="w-full border rounded-md p-2 bg-greenButtonValle text-sm"
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

        {/* Precio Mínimo */}
        <div>
          <label className="block font-bold mb-2 text-sm text-greenValle">Precio Mínimo</label>
          <input
            type="number"
            className="w-full border rounded-md p-2 bg-greenButtonValle text-sm"
            placeholder="Ej: 100"
            value={minPrice || ""}
            onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : undefined)}
          />
        </div>

        {/* Precio Máximo */}
        <div>
          <label className="block font-bold mb-2 text-sm text-greenValle">Precio Máximo</label>
          <input
            type="number"
            className="w-full border rounded-md p-2 bg-greenButtonValle text-sm"
            placeholder="Ej: 500"
            value={maxPrice || ""}
            onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}
          />
        </div>

        {/* Botón para Aplicar Filtros */}
        <div className="flex items-end">
          <button
            onClick={applyFilters}
            className="w-full bg-greenValle text-white py-2 px-4 rounded-md hover:bg-greenButtonValle transition text-sm"
          >
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;

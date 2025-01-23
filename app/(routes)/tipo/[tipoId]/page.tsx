"use client";

import { useState, useEffect } from "react";
import getProductos from "@/actions/get-productos";
import getTipo from "@/actions/get-tipo";
import Filters from "@/components/ui/filters";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { Producto } from "@/types";

interface TipoPageProps {
  params: Promise<{ tipoId: string }>;
}

const TipoPage: React.FC<TipoPageProps> = ({ params }) => {
  const [tipo, setTipo] = useState<{ tipnombre: string } | null>(null);
  const [initialProducts, setInitialProducts] = useState<Producto[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Producto[]>([]);
  const [producers, setProducers] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const resolvedParams = await params;
      const tipoData = await getTipo(Number(resolvedParams.tipoId));
      const productos = await getProductos({ tipid: Number(resolvedParams.tipoId) });

      setTipo(tipoData);
      setInitialProducts(productos);
      setFilteredProducts(productos);

      // Obtener productores únicos
      const uniqueProducers = Array.from(
        new Set(productos.map((p) => p.productor?.pronombre ?? ""))
      );
      setProducers(uniqueProducers);
    };

    fetchData();
  }, [params]);

  const handleFilter = (filters: { producer?: string; minPrice?: number; maxPrice?: number }) => {
    let filtered = [...initialProducts];

    // Filtro por productor
    if (filters.producer) {
      filtered = filtered.filter((p) => p.productor?.pronombre === filters.producer);
    }

    // Filtro por precio mínimo
    const minPrice = filters.minPrice ?? 0; // Si `filters.minPrice` es undefined, usa 0
    filtered = filtered.filter((p) => p.prdprecio >= minPrice);

    // Filtro por precio máximo
    const maxPrice = filters.maxPrice ?? Infinity; // Si `filters.maxPrice` es undefined, usa Infinity
    filtered = filtered.filter((p) => p.prdprecio <= maxPrice);

    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          {/* Título de la tienda*/}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-greenValle">Bienvenido a nuestra tienda!</h1>
            <p className="mt-4 text-gray-700">
              Cada producto de Valle de Gigantes no solo es delicioso, sino también un aporte directo al
              desarrollo sostenible de nuestras comunidades.
            </p>
          </div>
          {/* Título del tipo */}
          <h1 className="text-3xl font-bold mb-6 text-greenValle">{tipo?.tipnombre || "Productos"}</h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filtros */}
            <Filters producers={producers} onFilter={handleFilter} />

            {/* Lista de Productos */}
            <div className="lg:col-span-3">
              <ProductList title="Todos los productos" items={filteredProducts} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TipoPage;

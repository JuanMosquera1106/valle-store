"use client";

import { useState, useEffect } from "react";

interface RegisterClientFormProps {
  initialData?: {
    clinombre: string;
    clicorreo: string;
    clitelefono?: string; // Opcional
    clici?: string; // Opcional
  };
  onSubmit: (cliente: {
    clinombre: string;
    clicorreo: string;
    clitelefono?: string; // Opcional
    clici?: string; // Opcional
  }) => void;
}

const RegisterClientForm: React.FC<RegisterClientFormProps> = ({
  initialData,
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    clinombre: initialData?.clinombre || "",
    clicorreo: initialData?.clicorreo || "",
    clitelefono: initialData?.clitelefono || "",
    clici: initialData?.clici || "",
  });

  // Actualizar el formulario si `initialData` cambia
  useEffect(() => {
    if (initialData) {
      setFormData({
        clinombre: initialData.clinombre || "",
        clicorreo: initialData.clicorreo || "",
        clitelefono: initialData.clitelefono || "",
        clici: initialData.clici || "",
      });
    }
  }, [initialData]);

  // Actualizar los valores del formulario al cambiar
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar los datos al realizar submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Limpiar valores opcionales antes de enviar
    const cleanedData = {
      clinombre: formData.clinombre.trim(),
      clicorreo: formData.clicorreo.trim(),
      clitelefono: formData.clitelefono.trim() || undefined,
      clici: formData.clici.trim() || undefined,
    };

    onSubmit(cleanedData); // Enviar datos procesados al componente padre
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 w-full max-w-[90%] lg:max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md"
    >
      <h1 className="font-bold text-2xl text-center text-greenValle mb-4">
        Datos del Cliente
      </h1>

      <input
        type="text"
        name="clinombre"
        placeholder="Nombre"
        value={formData.clinombre}
        onChange={handleChange}
        className="w-full p-2 border rounded-md bg-grayValle"
        required
      />

      <input
        type="email"
        name="clicorreo"
        placeholder="Correo"
        value={formData.clicorreo}
        onChange={handleChange}
        className="w-full p-2 border rounded-md bg-grayValle"
        required
      />

      <input
        type="text"
        name="clitelefono"
        placeholder="Teléfono (opcional)"
        value={formData.clitelefono}
        onChange={handleChange}
        className="w-full p-2 border rounded-md bg-grayValle"
      />

      <input
        type="text"
        name="clici"
        placeholder="Cédula o Identificación (opcional)"
        value={formData.clici}
        onChange={handleChange}
        className="w-full p-2 border rounded-md bg-grayValle"
      />

      <button
        type="submit"
        className="w-full bg-yellowButtonValle text-white py-2 rounded-md hover:bg-yellow-600 transition"
      >
        {initialData ? "Actualizar Cliente" : "Registrar Cliente"}
      </button>
    </form>
  );
};

export default RegisterClientForm;

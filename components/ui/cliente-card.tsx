"use client";

import { Cliente } from "@/types";

interface ClientCardProps {
  clientData: Cliente;
  onEdit: () => void;
}

const ClientCard: React.FC<ClientCardProps> = ({ clientData, onEdit }) => {
  return (
    <div className="p-4 border rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-bold">Datos del Cliente</h2>
      <p><strong>Nombre:</strong> {clientData.clinombre}</p>
      <p><strong>Correo:</strong> {clientData.clicorreo}</p>
      <p><strong>Teléfono:</strong> {clientData.clitelefono || "No registrado"}</p>
      <p><strong>Cédula:</strong> {clientData.clici || "No registrado"}</p>
      <button
        onClick={onEdit}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Editar
      </button>
    </div>
  );
};

export default ClientCard;

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Dashboard() {
  const [titulo, setTitulo] = useState("");
  const [resultado, setResultado] = useState<any>(null);
  const [nuevoNodo, setNuevoNodo] = useState("");
  const [nodos, setNodos] = useState<any[]>([]);
  const [cadena, setCadena] = useState<any[]>([]);

  async function crearTransaccion() {
    const res = await fetch("/api/transactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo_obtenido: titulo }),
    });
    const data = await res.json();
    setResultado(data);
    obtenerCadena();
  }

  async function registrarNodo() {
    await fetch("/api/nodes/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: nuevoNodo }),
    });
    obtenerNodos();
  }

  async function obtenerNodos() {
    const res = await fetch("/api/nodes/list");
    const data = await res.json();
    setNodos(Array.isArray(data.nodos) ? data.nodos : []);
  }

  async function obtenerCadena() {
    const res = await fetch("/api/chain");
    const data = await res.json();
    setCadena(Array.isArray(data.cadena) ? data.cadena : []);
  }

  async function minarBloque() {
    const res = await fetch("/api/mine", { method: "POST" });
    const data = await res.json();
    setResultado(data);
    obtenerCadena();
  }

  async function resolverConflictos() {
    const res = await fetch("/api/nodes/resolve");
    const data = await res.json();
    setResultado(data);
    obtenerCadena();
  }

  useEffect(() => {
    obtenerNodos();
    obtenerCadena();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Barra lateral con logo fijo */}
      <aside className="w-64 bg-blue-900 text-white p-6 flex flex-col items-center">
        <Image
          src="/logo-carrera.png"
          alt="Logo Carrera"
          width={64}
          height={64}
          className="mb-4"
        />
        <h2 className="text-lg font-bold mb-6">Blockchain Académica</h2>
        <nav className="space-y-3 w-full">
          <a href="#transacciones" className="block hover:text-yellow-300">
            Transacciones
          </a>
          <a href="#nodos" className="block hover:text-yellow-300">
            Nodos
          </a>
          <a href="#cadena" className="block hover:text-yellow-300">
            Cadena
          </a>
          <a href="#mine" className="block hover:text-yellow-300">
            Minar
          </a>
          <a href="#resolve" className="block hover:text-yellow-300">
            Resolver
          </a>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-10 space-y-10">
        {/* Aquí van tus secciones como antes */}
      </main>
    </div>
  );
}

'use client';
import { RedocStandalone } from 'redoc';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4 text-escuelaBlue">
        Documentación API - Blockchain Académica
      </h1>
      <RedocStandalone specUrl="/openapi.json" />
    </div>
  );
}


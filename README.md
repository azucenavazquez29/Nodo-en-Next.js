PASOS PARA LA CONFIGURACIÓN EN EL NODO 
git clone https://github.com/tuusuario/blockchain-dashboard.git
cd blockchain-dashboard
npm install
npm run dev
 AHORA ESTAS SON LAS RUTAS DE MI LOCAL EN EL APP 
 ▲ Next.js 16.2.1 (Turbopack)
- Local:   http://localhost:3001
- Network: http://<tu-ip-local>:3001
- 
  ESTAS SON los edpoints principales 
/transactions	POST	Registrar una nueva transacción académica
/mine	POST	Minar un nuevo bloque en la cadena
/chain	GET	Obtener la cadena de bloques local
/nodes/register	POST	Registrar un nodo en la red
/nodes/list	GET	Listar los nodos conectados
/nodes/resolve	GET	Resolver conflictos entre nodos
Ejemplo de las transacciones
curl -X POST http://localhost:3001/api/transactions \
-H "Content-Type: application/json" \
-d '{
  "persona_id": "11111111-1111-1111-1111-111111111111",
  "institucion_id": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
  "programa_id": "cccccccc-cccc-cccc-cccc-cccccccccccc",
  "titulo_obtenido": "Ingeniero en Sistemas Computacionales",
  "fecha_fin": "2023-05-30"
}'

la ruta de la mina 
curl -X POST http://localhost:3001/api/mine

la ruta que tiene para el nodo 
curl http://localhost:3001/api/chain

curl -X POST http://localhost:3001/api/nodes/register \
-H "Content-Type: application/json" \
-d '{"url": "http://localhost:3002"}'

esta es la ruta que tiene de lustar los nodos 
curl http://localhost:3001/api/nodes/list

la ruta que tiene en el resolve 
curl http://localhost:3001/api/nodes/resolve

📑 Documentación OpenAPI

La API está descrita en el archivo openapi.json.
Puedes importar este archivo en Swagger UI, Postman o Redoc para visualizar y probar los endpoints.
































This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

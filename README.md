This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# Para contruir el build
npm run build
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

```bash docker
# Crear la imagen
docker build -t nextjs-first-steps . 

# Correr la imagen
docker container run -p 3000:3000 nextjs-first-steps

# Información para crea Dockerfile
https://github.com/vercel/next.js/tree/canary/examples/with-docker

```


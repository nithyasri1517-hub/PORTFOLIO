import { preview } from 'vite';

const server = await preview({
  configFile: false,
  root: '.',
  preview: {
    port: 4173,
    host: true,
  },
});

server.printUrls();

import { createServer } from 'vite';

const readArg = (name, fallback) => {
  const index = process.argv.indexOf(name);
  return index >= 0 && process.argv[index + 1] ? process.argv[index + 1] : fallback;
};

const host = readArg('--host', '127.0.0.1');
const port = Number(readArg('--port', '5173'));

const server = await createServer({
  configFile: false,
  root: process.cwd(),
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    host,
    port,
  },
});

await server.listen();
server.printUrls();

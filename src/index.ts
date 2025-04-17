import Fastify from 'fastify';

const app = Fastify({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'yyyy-mm-dd HH:MM:ss,l',
        ignore: 'pid,hostname',
        colorize: true
      }
    }
  }
});

const start = async () => {
  try {
    await app.listen({port: 3000, host: '0.0.0.0'});
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

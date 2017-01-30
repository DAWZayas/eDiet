import {listen, r} from 'rethinkdb-websocket-server';

import {db as dbConfig, auth as authConfig} from '../../config';

const rethinkConn = r.connect({
  host: dbConfig.host,
  port: dbConfig.port,
  db: dbConfig.db,
});

const options = {
  httpPath: '/realtime',
  dbHost: dbConfig.host,
  dbPort: dbConfig.port,
  db: dbConfig.db,
  unsafelyAllowAnyQuery: true,
};

export default (httpServer) => {
  listen({
    ...options,
    httpServer,
  });
};

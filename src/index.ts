import 'reflect-metadata';
import http from 'http';

import expressApp from './api/app';

const port = 8200;

export const server = (async () => {

  return http
    .createServer(expressApp)
    .listen(port, () => console.log(`Express server listening on port ${port}`),
    );
})();

export default expressApp;

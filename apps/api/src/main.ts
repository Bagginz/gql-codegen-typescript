import * as express from 'express';
import { gqlRoute } from './routes';

const app = express();
app.use(express.json());
gqlRoute(app);

const server = app.listen(3333, () => {
    console.log(`Listening at : http://localhost:3333`);
});
server.on('error', console.error);
require("dotenv").config();
import * as express from 'express';
import * as path from 'path';
import routes from './routes';

import { configurePassport } from './middlewares/passport-strategies.mw'

const app = express();

configurePassport(app)
app.use(express.static('public'));
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")))
app.listen(port, () => console.log(`Server listening on port: ${port}`));
import express from 'express';
var cors = require('cors')

import { routes as mongoRoutes } from './mongo-routes';

const app = express();

app.use(cors());
app.options('*', cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const port = 3000;

app.get('/', (req, res)=>{
    res.json('Hello World')
});


app.use('/mongo/', mongoRoutes);


app.listen(port, err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`server is listening on internal network http://localhost:3000`);
  });

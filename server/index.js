import path from 'path';
import fs from 'fs';
import qs from 'qs';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';

import { fetchDataOnReload } from '../src/api/api';

import {Provider} from 'react-redux';
import store from "../src/reducer/index";

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {

  const params = qs.parse(req.query);

  const data = fetchDataOnReload(params);
  console.log(data);
  const app = ReactDOMServer.renderToString(<Provider store={store}><App name="SpaceX Launch Programs" /></Provider>);
  
    const indexFile = path.resolve('./build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }
  
      return res.send(
        data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      );
    });
  });
  
  app.use(express.static('./build'));
  
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
import express from 'express';
import { getAllCollections } from './mongo-client';

export var routes = express.Router();

routes.get('/:dbName/getAllCollections', async (req, res) => {

    console.log('Get all Collections: ', req.params.dbName);
    var results = await getAllCollections(req.params.dbName);
    res.json(results);

});
var ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;

import { environment } from '../../environments/environment';

const mongodb_url = environment.mongodb_url

export async function getAllCollections(dbName:string){
    const client = await MongoClient.connect(mongodb_url)
        .catch(function(err:any){ console.error(err);});
    if(client) {
    
        const dbo = client.db(dbName);
        let collectionsObj = dbo.listCollections();
        let collections = await collectionsObj.toArray();
        return collections;
    }
    else
        throw 'Cannot connect to client';
}

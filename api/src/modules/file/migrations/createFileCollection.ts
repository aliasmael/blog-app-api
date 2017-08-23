import { config } from './../../../config/config';

class CreateFileCollection {
    
    // Run migration when declearing CreateDb class
    constructor () {
        let MongoClient = require('mongodb').MongoClient;

        MongoClient.connect(config.mongoDb.url, function(err, db) {
            if (err) throw err;
            db.createCollection("files", function(err, res) {
                if (err) throw err;
                console.log("Collection created!");
                db.close();
            });
        });
    }

}

new CreateFileCollection();
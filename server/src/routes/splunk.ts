import {Request, Response} from "express";

import apiData = require('../tests/data/ga.json'); //load our local database file

export class SplunkRoute { 
    
    public routes(app): void { //received the express instance from app.ts file      

        app.route('/splunk/:id')
        .get((req:Request, res: Response) => {
            let id = req.params.id;
            res.status(200).send(apiData);
        });
        
        
    }
}
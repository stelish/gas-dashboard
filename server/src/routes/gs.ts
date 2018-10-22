import {Request, Response} from "express";

import gaData = require('../tests/data/ga.json'); //load our local database file

export class GaAnalyticsRoute { 
    
    public routes(app): void { //received the express instance from app.ts file      

        app.route('/ga/:id')
        .get((req:Request, res: Response) => {
            let id = req.params.id;
            res.status(200).send(gaData);
        });
     
    }
}
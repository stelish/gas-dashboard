import {Request, Response} from "express";

import apiData = require('../tests/data/ga.json'); //load our local database file

export class StackRoute { 
    
    public routes(app): void { //received the express instance from app.ts file      

        app.route('/stack')
        .get((req:Request, res: Response) => {
            res.status(200).send(apiData);
        });
              
    }
}
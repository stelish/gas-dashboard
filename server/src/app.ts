import * as express from 'express';
import * as bodyParser from 'body-parser'; 
import { GaAnalyticsRoute } from './routes/gs';
import { SplunkRoute } from './routes/splunk';
import { StackRoute } from './routes/stack';
import { TwitterRoute } from './routes/twitter';


class App {

    public app: express.Application;
    public gaAnalyticsRoutes:GaAnalyticsRoute = new GaAnalyticsRoute();
    public splunkRoute:SplunkRoute = new SplunkRoute();
    public stackRoute:StackRoute = new StackRoute();
    public twitterRoute:TwitterRoute = new TwitterRoute();

    constructor() {
        this.app = express(); //run the express instance and store in app
        this.config();
        this.gaAnalyticsRoutes.routes(this.app);
        this.splunkRoute.routes(this.app);
        this.stackRoute.routes(this.app);
        this.twitterRoute.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());

        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({
            extended: false
        }));

    }

}

export default new App().app;

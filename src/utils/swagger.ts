import { Express, Request, Response } from 'express';
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express"



const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Github Rest API Docs",
            version: "1.0"
        }
    },

    apis: ["./src/routes/github.route.ts"]

};


const swaggerSpec = swaggerJsdoc(options)

const swaggerDocs = (app: Express, port: number) => {
    //Swagger Page
    app.use('/docs/github', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

    //Docs in Json Format
    app.get('docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/vnd.github+json')

        res.send(swaggerSpec)
    });
    console.info(`API Docs available at http://localhost:${port}/docs/github`)
}

export default swaggerDocs;
import { Request, Response } from 'express'

const loggerMiddleware = (req: Request, resp: Response, next) => {
    
    console.log('Request logged:', req.method, req.path)

    resp.setHeader('Access-Control-Allow-Origin', 'https://localhost:8080');
    resp.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    resp.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    resp.setHeader('Access-Control-Allow-Credentials', 'true');

    next();
}

export default loggerMiddleware
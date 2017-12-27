//This router is responsible for Auth requests only.
import express from 'express';
const Router = express.Router();

// Router.use();

Router.get('/', (req, res)=>{
    res.send('Welcome to Auth');
});

export default Router;
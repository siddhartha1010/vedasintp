import express, {Application,Request,Response} from 'express';
import dotenv from 'dotenv';
dotenv.config({path: '.env'});

const app = express()
const port = process.env.PORT ||4000;

app.get('/', (req:Request, res:Response) => {
  res.send('Hello Worldsssss!aasa')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
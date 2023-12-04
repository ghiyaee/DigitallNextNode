import express from "express"
import cors from 'cors'
const app = express()
app.use(cors())
app.get(('/api'),(req,res)=> {
    res.send({ msg: 'CONNECT SERVER TO CLIENT' });
})
app.listen(5000, () => {
   console.log(`start sever at port :5000`);
})
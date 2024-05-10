import 'dotenv/config'

import {app} from './app.js'

app.get('/', (req, res)=>{
    res.send("Hello World!")
})

app.listen(process.env.PORT, ()=>{
    console.log(`listening on PORT ${process.env.PORT}`);
})
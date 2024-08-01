const express = require('express');
const redis = require('redis');

const app = express();

const client = redis.createClient({
    host:'redis',
    port: 6379
});

app.get('/',(req,res)=>{
    client.get('visitsCounter',(err,visitsCounter) => {
        res.send('VisitsCounter :'+visitsCounter);
        client.set('visitsCount',parseInt(visitsCounter)+1);
    })
})
app.listen(8080,()=>{
    console.log('listeneing on port 8080');
})
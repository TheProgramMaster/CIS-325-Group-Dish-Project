const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

app.use(bodyParser.json());

app.post('/submit', (req,res) => {
    /*const input = req.body.input;
    const uri = "mongodb+srv://gjohnson25:ComputerMan_2023@dishcluster.xcerwlv.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    client.connect(err => {
        const collection = client.db("DishCluster").collection("Dishes");
        collection.insertOne({input}, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send({message: 'Error inserting data'});
            } else{
                console.log(result);
                res.send({message: 'Data inserted successfully'});
            }
            client.close();
        });
    });*/
    console.log("Program is running from express.js");
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
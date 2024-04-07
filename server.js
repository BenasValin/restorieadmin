const express = require('express'),
dbOperation = require('./dbFiles/dbOperation'),
        cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/getdata', async (req, res) => {
    const search = Object.entries(req.body);
    console.log(`search yra ${search}`)
    try {
     let records = await dbOperation.getData(search);
      res.json(records);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });


  app.post('/api/addRecord', async (req, res) => {
    console.log(req.body)
    const records = Object.entries(req.body);
    console.log(records)
    try {
      const boxes = await dbOperation.addRecord(records);
      res.json(boxes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.post('/api/deleteRecord', async (req, res) => {
    console.log(req.body.id)
    try {
      const boxes = await dbOperation.deleteRecord(req.body.id);
      res.json();
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.post('/api/editRecord', async (req, res) => {
    console.log(req.body)
    const record = Object.entries(req.body);
    console.log(record)
    try {
      const boxes = await dbOperation.editRecord(record);
      res.json(boxes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
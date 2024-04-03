const express = require('express'),
dbOperation = require('./dbFiles/dbOperation'),
        cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.post('/api', async (req, res) => {
//     try {
//         console.log('Called');
//         const result = await dbOperation.getEmployees(req.body.name);
//         res.send(result.recordset);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send("Internal Server Error");
//     }
// });

// app.post('/hello', async(req, res) => {
//     await dbOperation.createEmployee(req.body);
//     const result = await dbOperation.getEmployees(req.body.ilgis);
//     console.log('Called')
//     res.send(result.recordset)
// })

app.post('/api/getboxes', async (req, res) => {
    const box = {ilgis: req.body.ilgis, plotis: req.body.plotis, aukstis: req.body.aukstis, ipakavimas: req.body.ipakavimas}
    console.log(box)
    try {
      const boxes = await dbOperation.findBoxes(box.ilgis, box.plotis, box.aukstis, box.ipakavimas);
      res.json(boxes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });


  app.post('/api/addbox', async (req, res) => {
    const box = {ilgis: req.body.ilgis, plotis: req.body.plotis, aukstis: req.body.aukstis, kiekis: req.body.kiekis, ispejimas: req.body.ispejimas, kritinis: req.body.kritinis}
    console.log(box)
    try {
      const boxes = await dbOperation.addBox(box.ilgis, box.plotis, box.aukstis, box.kiekis, box.ispejimas, box.kritinis);
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

  app.post('/api/editbox', async (req, res) => {
    const box = {id: req.body.id, ilgis: req.body.ilgis, plotis: req.body.plotis, aukstis: req.body.aukstis, kiekis: req.body.kiekis, ispejimas: req.body.ispejimas, kritinis: req.body.kritinis}
    console.log(box)
    try {
      const boxes = await dbOperation.editBox(box.id, box.ilgis, box.plotis, box.aukstis, box.kiekis, box.ispejimas, box.kritinis);
      res.json(boxes);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });

  app.get('/', (req, res) => {
    console.log(req.query.category); // For `?category=deze`, this logs `deze`
    res.send('Category is: ' + req.query.category);
  });

  

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
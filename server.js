const express = require('express'),
Employee = require('./dbFiles/employee'),
dbOperation = require('./dbFiles/dbOperation'),
        cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/api', async (req, res) => {
    try {
        console.log('Called');
        const result = await dbOperation.getEmployees(req.body.name);
        res.send(result.recordset);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

app.post('/hello', async(req, res) => {
    await dbOperation.createEmployee(req.body);
    const result = await dbOperation.getEmployees(req.body.ilgis);
    console.log('Called')
    res.send(result.recordset)
})

let Pam = new Employee(9999, 9999, 100, 50, 10, 10, 2);

dbOperation.createEmployee(Pam);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
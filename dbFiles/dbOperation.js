const config = require('./dbConfig'),
sql = require('mssql');

const findBoxes = async (id, side1, side2, side3, pak) => {
    id = parseInt(id)
    side1 = parseInt(side1)
    side2 = parseInt(side2)
    side3 = parseInt(side3)
    pak = parseInt(pak)


    let box = [side1, side2, side3]
    box.sort(function(a, b){return b-a});
    side1 = box[0];
    side2 = box[1];
    side3 = box[2];
   try {
        let pool = await sql.connect(config);
        const query = `Select * from boxes where ilgis > ${side1 + pak + pak} and plotis > ${side2 + pak + pak} and aukstis > ${side3 + pak + pak} ${id == -1 ? '' : "and id = " + id}`;
        console.log(query); // Log the query
        let boxes = await pool.request().query(query);
        return boxes;
    } catch (error) {
        console.log(error);
    }
};

const addBox = async (ilgis, plotis, aukstis, kiekis, ispejimas, kritinis) => {

    ilgis = parseInt(ilgis);
    plotis = parseInt(plotis);
    aukstis = parseInt(aukstis);
    kiekis = parseInt(kiekis);
    ispejimas = parseInt(ispejimas);
    kritinis = parseInt(kritinis);

    let box = [ilgis, plotis, aukstis]
    box.sort(function(a, b){return b-a});
    ilgis = box[0];
    plotis = box[1];
    aukstis = box[2];


    try {
        let id = await IDGenerator();
        console.log(`id yra ${id}`);
        let pool = await sql.connect(config);
        const query = `INSERT INTO boxes (id, ilgis, plotis, aukstis, ispejimas, kritinis, kiekis) VALUES (${id}, ${ilgis}, ${plotis},${aukstis},${kiekis},${ispejimas},${kritinis})`;
        console.log(query); // Log the query
        let boxes = await pool.request().query(query);
        return boxes;
    } catch (error) {
        console.log(error);
    }
};


const deleteRecord = async (id) => {

    id = parseInt(id);

    try {
        let pool = await sql.connect(config);
        const query = `DELETE FROM boxes WHERE id = ${id}`;
        console.log(query); // Log the query
        let request = await pool.request().query(query);
        return request;
    } catch (error) {
        console.log(error);
    }
};

const IDGenerator = async () => {
    try {
        let pool = await sql.connect(config);
        const query = "SELECT MAX(id) AS maxId FROM boxes;";
        let result = await pool.request().query(query);

        let maxId = result.recordset[0].maxId;
        if (maxId === null) {
            return 1;
        } else {
            return maxId + 1;
        }
    } catch (error) {
        console.log(error);
    }
};


const editBox = async (id, ilgis, plotis, aukstis, kiekis, ispejimas, kritinis) => {
    id = parseInt(id);
    ilgis = parseInt(ilgis);
    plotis = parseInt(plotis);
    aukstis = parseInt(aukstis);
    kiekis = parseInt(kiekis);
    ispejimas = parseInt(ispejimas);
    kritinis = parseInt(kritinis);

    try {
        let pool = await sql.connect(config);
        const query = `UPDATE boxes
        SET ilgis = '${ilgis}', plotis= '${plotis}', aukstis= '${aukstis}', kiekis= '${kiekis}', ispejimas= '${ispejimas}', kritinis= '${kritinis}'
        WHERE id = ${id}`;
        console.log(query); // Log the query
        let boxes = await pool.request().query(query);
        return boxes;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    findBoxes,
    addBox,
    IDGenerator,
    deleteRecord,
    editBox
}

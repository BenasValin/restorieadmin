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
        const query = `Select * from deze where ilgis > ${side1 + pak + pak} and plotis > ${side2 + pak + pak} and aukstis > ${side3 + pak + pak} ${id == -1 ? '' : "and id = " + id}`;
        console.log(query); // Log the query
        let boxes = await pool.request().query(query);
        return boxes;
    } catch (error) {
        console.log(error);
    }
};

const addRecord = async (record) => {
    function Findvalues(record){
        let names = ""
        let values = ""
        for (let i = 1; i<record.length; i++){
            if (record[i][1] != ''){
                names += record[i][0];
                values+= checkIfString(record[i][1])
            }
            if(i!=record.length-1 && record[i+1][1] != '') {
                names+=", "
                values+=", "
            }
        }
        return [names,values];
    } 

    try {
        let id = await IDGenerator();
        console.log(`id yra ${id}`);
        let pool = await sql.connect(config);
       
        let names = Findvalues(record)[0]
        let values = Findvalues(record)[1]

        const query = `INSERT INTO ${record[0][1]} (id, ${record[0][0]}, ${names}) VALUES (${id}, '${record[0][1]}', ${values})`;
        categoryInsert(id, record[0][1])
        console.log(query); // Log the query
        let data = await pool.request().query(query);
        return data;
    } catch (error) {
        console.log(error);
    }
};


const deleteRecord = async (id) => {
    let kategorija = await categorySearch(id);
    console.log(kategorija)

    try {
        let pool = await sql.connect(config);
        const query = `DELETE FROM ${kategorija} WHERE id = ${id};
         DELETE from id where id = ${id}`;
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
        const query = "SELECT MAX(id) AS maxId FROM id";
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
const categoryInsert = async (id, kategorija) => {
    try {
        console.log(`insertinamas id yra ${id} ir kategorija yra ${kategorija}`)
        let pool = await sql.connect(config);
        const query = `INSERT into id (id, kategorija) values (${id}, '${kategorija}')`;
        pool.request().query(query);
        return
    }
     catch (error) {
        console.log(error);
    }
}

const categorySearch = async (id) => {
    try {
        let pool = await sql.connect(config);
        const query = `SELECT kategorija FROM id WHERE id = ${id}`;
        let result = await pool.request().query(query);
        if (result.recordset.length > 0) {
            // Assuming 'kategorija' is a column in the 'id' table
            let kategorija = result.recordset[0].kategorija;
            console.log(kategorija);
            return kategorija; // Now this correctly returns a string
        } else {
            throw new Error("Category not found.");
        }
    } catch (error) {
        console.log(error);
        throw error; // It's good practice to re-throw the error so the caller is aware that an error occurred.
    }
};



const editRecord = async (record) => {

    try {
        let pool = await sql.connect(config);
        let query = `UPDATE ${record[0][1]}
        SET `;
        for (let i = 1; i<record.length; i++){
            if (record[i][0] == 'id')          continue;
            query += `${record[i][0]} = ${record[i][1]}`;
            if (i!=record.length-1) query+=" , ";
        }
        query += ` where id = ${record[1][1]}`
        console.log(query); // Log the query
        let boxes = await pool.request().query(query);
        return boxes;
    } catch (error) {
        console.log(error);
    }
};

const getData = async (item) => {


   try {
        let pool = await sql.connect(config);
        let query =
        `Select *
         from ${item[0][1]}
         where 1=1`
        for (let i = 1; i<item.length; i++){
            if(item[i][1] != '' && item[i][1] != undefined && item[i][1] != null) query += ` and ${checkPrefix(item[i][1], item[i][0])}`
        }
        console.log(query); // Log the query
        let records = await pool.request().query(query);
        return records;
    } catch (error) {
        console.log(error);
    }
};


const autoComplete = async (item) => {
    console.log(`name = ${item.name}`)
    console.log(`la= ${item.kategorija}`)
    console.log(`name = ${item.name}`)
    try { 
         let pool = await sql.connect(config);
         let query =
         `Select DISTINCT ${item.name}
          from ${item.kategorija}
          where ${item.name} like '%${item.value}%'`
         console.log(query); // Log the query
         let records = await pool.request().query(query);
         return records;
     } catch (error) {
         console.log(error);
     }
 };
//Internal function for checking > or <
function checkPrefix(atribute, columnName) {
    atribute = atribute.replace(/[\/'"\[\]{}(),]/g, "");

    if (atribute[0] == '<' || atribute[0] == '>' || atribute[0] == '=') {
        if(atribute.length == 1) {
            return `TRY_CONVERT(float, ${columnName}) > -1`;
        }
         else {
                if ( atribute[1] == "="){
                    if (atribute.length == 2 ) return `TRY_CONVERT(float, ${columnName}) > -1`;
                    else if (!isNaN(parseFloat(atribute.substring(2)))) return `TRY_CONVERT(float, ${columnName}) ${atribute}`;
                }
                else if (!isNaN(parseFloat(atribute.substring(1)))) return `TRY_CONVERT(float, ${columnName}) ${atribute}`;
                else return `${columnName} LIKE '%${atribute.substring(1)}%'`;
           
        }
    }
    if (!isNaN(parseFloat(atribute))) return `TRY_CONVERT(float, ${columnName})  = ${atribute}`
    return `${columnName} LIKE '%${atribute}%'`;
}


function checkIfString(atribute){
    if (typeof(atribute)==='number') return atribute
    else return `'${atribute}'`
}


module.exports = {
    findBoxes,
    addRecord,
    deleteRecord,
    getData,
    editRecord,
    autoComplete
}

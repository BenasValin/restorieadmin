const config = require('./dbConfig'),
sql = require('mssql');

const getEmployees = async(ilgis) => {
    try {
        let pool = await sql.connect(config)
        let employees = await pool.request().query(`SELECT * from boxes Where ilgis = '${ilgis}'`)
        console.log(employees);
        return employees;
    }
    catch(error){
        console.log(error);
    }
}

const createEmployee = async (Employee) => {
    try {
        let pool = await sql.connect(config);
        const query = `INSERT INTO boxes values (${Employee.id}, ${Employee.ilgis}, ${Employee.plotis},${Employee.aukstis},${Employee.ispejimas},${Employee.kritis},${Employee.kiekis})`;
        console.log(query); // Log the query
        let employees = await pool.request().query(query);
        return employees;
    } catch (error) {
        console.log(error);
    }
};



module.exports = {
    createEmployee,
    getEmployees
}

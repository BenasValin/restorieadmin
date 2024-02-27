class Employee {
    constructor(id, ilgis, plotis, aukstis, ispejimas, kritis, kiekis) {
        this.id = id;
        this.ilgis = ilgis;
        this.plotis = plotis;
        this.aukstis = aukstis;
        this.kiekis = kiekis;
        this.ispejimas = ispejimas;
        this.kritis = kritis;
    }
}

module.exports = Employee;
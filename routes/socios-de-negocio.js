const express = require('express');
const app = express();
const hana = require('@sap/hana-client');
const connection = hana.createConnection();
const params = require('../environments/environments');


app.get('/api', (req, res) => {
    connection.connect(params, (err) => {
        if (err) throw err;

        connection.exec('SELECT * FROM "SBO_MARCO_PE"."ODLN" WHERE "DocEntry" = ?', [46617], (err, rows) => {
            if(err) throw err;
            res.json({
                ok: true,
                data: rows
            });
            connection.disconnect();
        });
    })
});

module.exports = app;
const router = require ('express').Router ();

const clientsRoutes = require ("./clients-routes");

clientsRoutes.use ("/clients", clientsRoutes);

module.exports = router;
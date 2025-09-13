const { getAllPlanets } = require('../../models/planets.model');

async function httpGetAllPlanets(req, res) {
  // 'return' is used so that 'httpGetAllPlanets' stops executing.
  // And so that only one response is ever set.
  return res.status(200).json(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};

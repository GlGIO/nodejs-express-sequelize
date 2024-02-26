const Controller = require("./Controller.js");
const CursosServices = require("../services/CursosServices.js");

const cursoServices = new CursosServices();

class CursoController extends Controller {

	constructor() {
		super(cursoServices);
	}
}

module.exports = CursoController;
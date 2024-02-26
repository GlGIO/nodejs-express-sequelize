const Controller = require("./Controller.js");
const PessoasServices = require("../services/PessoasServices.js");

const pessoaServices = new PessoasServices();

class PessoaController extends Controller {

	constructor() {
		super(pessoaServices);
	}

	async pegaMatriculas(req, res) {
		const { estudanteId } = req.params;
		const matriculas = await pessoaServices.pegaMatriculasPorEstudante(Number(estudanteId));
		res.status(200).json(matriculas);
	}
}

module.exports = PessoaController;
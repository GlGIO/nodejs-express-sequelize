const database = require("../models");

class Services {
	constructor(nomeDoModel) {
		this.model = nomeDoModel;
	}
	async pegaTodosOsRegistros() {
		try {
			return await database[this.model].findAll();
		} catch (error) {
			throw new Error(error);
		}
	}
}

module.exports = Services; 
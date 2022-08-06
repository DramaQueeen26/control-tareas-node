const fs = require('fs');

const guardarDB = (data) => {
	
	const archivo = './db/data.json';

	fs.writeFileSync(archivo, JSON.stringify(data)); //Convierte un objeto a su versión válida como un string
}

module.exports = {
	guardarDB
}
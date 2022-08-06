const fs = require('fs');

const archivo = './db/data.json';

const guardarDB = (data) => {
	

	fs.writeFileSync(archivo, JSON.stringify(data)); //Convierte un objeto a su versión válida como un string
}

const leerDB = () => {

	if(!fs.existsSync(archivo)){
		return null;
	}

	const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
	const data = JSON.parse(info); //De string a arreglo, u objeto

	return data;

}

module.exports = {
	guardarDB,
	leerDB
}
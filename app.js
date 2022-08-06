require('colors');
const Tareas = require('./models/tareas');
const {guardarDB, leerDB} = require('./helpers/guardarArchivo');
const {
	inquirerMenu, 
	pause, 
	leerInput
	} = require('./helpers/inquirer');


const main = async() => {

	let opt = '';
	const tareas = new Tareas();

	const tareasDB = leerDB();

	if(tareasDB){
		//Establecer tareas
	}

	await pause();
	
	do{
		opt = await inquirerMenu();
		
		switch(opt){
			case '1':
				//Crear tarea

				//Leer el input
				const desc = await leerInput('Descripción:');
				
				//Crear la tarea y añadirla al listado
				tareas.crearTarea(desc);

			break;

			case '2':

				console.log(tareas.listadoArr);
				
			break;
		}

		// guardarDB(tareas.listadoArr);
		
		await pause();
	
	}while(opt !== '0');

}

main();
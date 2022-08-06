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
		tareas.cargarTareasFromArray(tareasDB);
	}
	
	do{
		opt = await inquirerMenu();
		
		switch(opt){
			
			//Crear tarea
			case '1':

				//Leer el input
				const desc = await leerInput('Descripción:');
				
				//Crear la tarea y añadirla al listado
				tareas.crearTarea(desc);

			break;

			//Listar tareas
			case '2':
				
				//Llamar al listado de tareas
				tareas.listadoCompleto();

			break;
		}

		guardarDB(tareas.listadoArr);
		
		await pause();
	
	}while(opt !== '0');

}

main();
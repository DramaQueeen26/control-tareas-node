require('colors');
const Tareas = require('./models/tareas');
const {
	inquirerMenu, 
	pause, 
	leerInput
	} = require('./helpers/inquirer');


const main = async() => {

	let opt = '';
	const tareas = new Tareas();
	
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

				console.log(tareas._listado);
				
			break;
		}
		
		await pause();
	
	}while(opt !== '0');

}

main();
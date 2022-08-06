require('colors');
const Tareas = require('./models/tareas');
const {guardarDB, leerDB} = require('./helpers/guardarArchivo');
const {
	inquirerMenu, 
	pause, 
	leerInput,
	listadoTareasBorrar,
	confirmar
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

			//Listar tareas completadas
			case '3':
				
				//Llamar las tareas completadas
				tareas.listarPendientesCompletadas(true);
			
			break;

			//Listar tareas pendientes
			case '4':
				
				//Llamar las tareas pendientes
				tareas.listarPendientesCompletadas(false);
			
			break;

			//Borrar tareas 
			case '6':
				
				console.log();
				const id = await listadoTareasBorrar(tareas.listadoArr);

				if(id !== '0'){

					const ok = await confirmar('\n¿Está seguro?:');
					
					if(ok){
						tareas.borrarTarea(id);
						console.log('\nTarea borrada correctamente'.green)
					}
				}
			
			break;
		}

		guardarDB(tareas.listadoArr);
		
		await pause();
	
	}while(opt !== '0');

}

main();
const Tarea = require('./tarea');
const colors = require('colors');

class Tareas
{
	_listado = {};

	//Método get. Se lee como una propiedad, no cómo un método
	get listadoArr()
	{
		const listado = [];
		//Transformar el objeto en arreglo
		Object.keys(this._listado).forEach(key => {
			const tarea = this._listado[key];
			listado.push(tarea);
		});

		return listado;

	}

	constructor()
	{
		this._listado = {};
	}

	borrarTarea(id = '')
	{
		if(this._listado[id]){
			delete this._listado[id];
		}
	}

	cargarTareasFromArray(tareas = [])
	{
		tareas.forEach(tarea => {
			this._listado[tarea.id] = tarea;
		});
	}

	crearTarea(desc = '')
	{
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}

	//OTRA MANERA
	listadoCompleto()
	{
		console.log();
		this.listadoArr.forEach((tarea, i) => {
			
			const idx = `${i+1}.`.green;
			const {desc, completadoEn} = tarea;

			const estado = (completadoEn)
							?'Completada'.green
							:'Pendiente'.red;

			console.log(`${idx} ${desc} :: ${estado}`);
		});
	}

	//ESTE LA HICE YO
	// listadoCompleto()
	// {
	// 	const listado = this.listadoArr;

	// 	for(var i = 0; i < listado.length; i++) {
	// 		listado[i]


	// 		if(listado[i].completadoEn === null){

	// 			console.log(`${colors.red(i+1)}${'.'.red} ${listado[i].desc} :: ${'Pendiente'.red}`);

	// 		}else{
				
	// 			console.log(`${colors.green(i+1)}${'.'.green} ${listado[i].desc} :: ${'Completada'.green}`);

	// 		}

	// 	}
	// }

	listarPendientesCompletadas(completadas = true)
	{
		console.log();
		let idx = 1;
		
		this.listadoArr.forEach(tarea => {

			const {desc, completadoEn} = tarea;

			const estado = (completadoEn)
							?'Completada'.green
							:'Pendiente'.red;
			
			if(completadas && completadoEn){
				console.log(`${(idx + '.').green} ${desc} :: ${completadoEn.toString().green}`);
				idx += 1;
			}

			if(!completadas && !completadoEn){
				console.log(`${(idx + '.').green} ${desc} :: ${estado}`);
				idx += 1;
			}

		});
	}
}

module.exports = Tareas;
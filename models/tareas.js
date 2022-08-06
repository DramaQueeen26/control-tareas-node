const Tarea = require('./tarea');

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
}

module.exports = Tareas;
const express = require('express');
const PORT = 3000;
const listViewRouter = require('./list_view_router');
const editViewRouter = require('./list_edit_router');

//body-parser: Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/list', listViewRouter);
app.use('/edit', editViewRouter);

// // // Lista de tareas (inicialmente vacía)
// let tasks = require('./tasks.json');

// // // Ruta para obtener la lista de tareas
//  app.get('/tasks', (req, res) => {
//    res.json(tasks);
//  });

// // Ruta para agregar una nueva tarea
// app.post('/tasks', (req, res) => {
//   const { description } = req.body;

//    if (!description) {
//      return res.status(400).json({ error: 'La descripción de la tarea es obligatoria.' });
//    }

//    const id = tasks.length + 1;
//    const newTask = {
//      id,
//      description,
//      completed: false,
//    };

//    tasks.push(newTask);
//    res.json(newTask);
//  });

// // Ruta para marcar una tarea como completada. Los dos puntos indican la parte que hará que la ruta sea dinámica. 
// //En este caso es el id
//  app.put('/tasks/:id', (req, res) => {
//    const { id } = req.params;

//    const task = tasks.find((t) => t.id === parseInt(id));

//    if (!task) {
//      return res.status(404).json({ error: 'Tarea no encontrada.' });
//    }

//    task.completed = true;
//    res.json(task);
//  });

//  app.delete('/tasks/:id', (req, res)=>{
//    const id= req.params.id;

//    res.send('Tarea ' +id+ ' eliminada');
//  })
app.listen(PORT, () => {
  console.log(`Servidor de tareas iniciado en http://localhost:${PORT}`);
});

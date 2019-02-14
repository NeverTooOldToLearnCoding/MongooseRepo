var mainController = require('../controllers/mainController');

module.exports = function(app){

app.get('/', mainController.index);

app.get('/view', mainController.view);

app.get('/animal/:id', mainController.viewAnimal);

app.get('/animal/destroy/:id', mainController.destroy);

app.get('/animal/edit/:id', mainController.viewEdit);

app.post('/edit/:id', mainController.edit);

// Add Animal 
app.post('/createAnimal', mainController.create);

};
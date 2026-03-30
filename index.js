//Ejercicio 1

import { getCurrentTime } from './src/time.js';

console.log('Hora actual:', getCurrentTime().hhmmss);


//Ejercicio 2

import app from './src/app.js';

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


//Extra Extra!!!

app.get('/', (req, res) =>{
  res.status(404).send('Not found');
}); 

import { sum } from './math.js';

console.log(sum(2, 2));

const students = ["Samuele", "Luca", "Paolo"];
const students2 = [...students];

students.push("Mario");

const person = {
    name: 'Samuele',
    lastname: 'Madrigali',
    age: 31
}

const person2 = {
    ...person,
    age: 32,
    city: "Levanto"
}

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      console.log(response);
      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }
      const data = await response.json();
      // Altre operazioni da eseguire con i dati ottenuti
    } catch (error) {
      console.log('Errore nel recupero dei dati:', error);
    }
  }
  
  fetchData();
  
// Get data from the first passenger in the list
// name, fare, pclass, survived, age
fetch('titanic-passengers.json')
    .then(res => res.json())
    .then(json => handleData(json))
    .catch(err => console.error(err.message))

function handleData(data) {
  const fields = data.map(passenger => passenger.fields)
  console.log(data)

  console.log(`The name of the first passenger is ${fields[0].name}`)
  console.log(`The fare of the first passenger is ${fields[0].fare}`)
  console.log(`The first passenger was a part of the ${fields[0].pclass} class.`)
  console.log(`Did the first passenger survive? ${fields[0].survived}`)
  console.log(fields[0].age) // returns undefined
  
  totalAmount(fields)
  survivorCount(fields)
  passengerClass(fields)

  fields.forEach( passenger => {
    const el = document.createElement('div')
    content.appendChild(el)
    el.style.backgroundColor = 'blue'
  });

  // el.style.backgroundColor = passenger.sex === 'male' ? 'cornflowerblue' : 'pink'
  // el.style.borderRadius = passenger.survived === 'No' ? '50%' : 'none'
  el.style.backgroundColor = passenger.survived === 'Yes' ? 'green' : 'pink'
}

// How many total passengers?
function totalAmount(data) {
  console.log(`How many total passengers? ${data.length}`)
}

// How many survived?
function survivorCount(data) {
  count = 0
  for (let passenger = 0; passenger < data.length; passenger += 1) {
    if (data[passenger].survived === 'Yes') {
      // console.log(data[passenger])
      count += 1
    };
  } 
  console.log(`How many survived? ${count}`)
  console.log(`How many died? ${data.length - count}`);
}

//   TODO: Loop over the list and look for each unique value
// TODO: You can use an object or a set for this
const pclasses = new Set()
const pc = {}

function passengerClass(data){
  for (let passenger = 0; passenger < data.length; passenger++) {
    
    
  }
  console.log(`The classes of passengers are ${data[passenger].pclass}`);
}
  



const arrayofPC = Object.keys(pc) // Get array of keys (method 2)
console.log(pclasses)
console.log(arrayofPC)
console.log(pc)



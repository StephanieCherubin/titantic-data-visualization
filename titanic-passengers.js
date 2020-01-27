// Get data from the first passenger in the list
// name, fare, pclass, survived, age
fetch('titanic-passengers.json')
    .then(res => res.json())
    .then(json => handleData(json))
    .catch(err => console.log(err.message))

function handleData(data) {
  const fields = data.map(passenger => passenger.fields)

  console.log(`The name of the first passenger is ${fields[0].name}`)
  console.log(`The fare of the first passenger is ${fields[0].fare}`)
  console.log(`The first passenger was a part of the ${fields[0].pclass} class.`)
  console.log(`Did the first passenger survive? ${fields[0].survived}`)
  console.log(fields[0].age) // returns undefined
  totalAmount(fields)
  survivorCount(fields)
  // age(fields)
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


function passengerClass(data) {
  // data.filter(passenger => passenger.age != undefined)
  // data.filter
  const fields = data.map(passenger => passenger.fields)
  
}


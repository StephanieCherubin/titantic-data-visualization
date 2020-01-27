// Get data from the first passenger in the list
// name, fare, pclass, survived, age
fetch('titanic-passengers.json')
    .then(res => res.json())
    .then(json => handleData(json))
    .catch(err => console.log(err.message))

function handleData(data) {
  const fields = data.map(passenger => passenger.fields)
  if (fields === undefined) {
    return None
  }
  console.log(fields[0].name)
  console.log(fields[0].fare)
  console.log(fields[0].pclass)
  console.log(fields[0].survived)
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


// function age(data) {
//   data.filter(passenger => passenger.age != undefined)
//   // data.filter
// }


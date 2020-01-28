const survivalContent = document.getElementById('survivalContent')
const sexContent = document.getElementById('sexContent')

fetch('titanic-passengers.json')
    .then(res => res.json())
    .then(json => handleData(json))
    .catch(err => console.error(err.message))

function handleData(data) {
  const fields = data.map(passenger => passenger.fields)
  console.log(data)

  // TODO: Apply data viz on these fields
  // fare
  // port of embarkation 
  // passenger class 
  // sex 
  // survived
  // sibling amount

  fields.forEach( passenger => {
    const el = document.createElement('div')
    survivalContent.appendChild(el)

    el.style.position = 'relative'
    el.style.width = '10px'
    el.style.height = '10px'
    el.style.margin = '1px'
    el.style.backgroundColor = 'orange'
    el.style.borderRadius = '50%';
    el.style.margin = '1px';
    el.style.backgroundColor = passenger.survived === 'No' ? 'gray' : 'red'

  });

  fields.forEach( passenger => {
    const el = document.createElement('div')
    sexContent.appendChild(el)

    el.style.position = 'relative'
    el.style.width = '0'
    el.style.height = '0'
    el.style.borderLeft = '5px solid transparent'
    el.style.borderRight = '5px solid transparent'
    el.style.borderBottom = '10px solid'
    el.style.margin = '1px'
    el.style.margin = '1px';
    el.style.borderBottom = passenger.sex === 'female' ? '10px solid hotpink' : '10px solid blue'
  });



  survivalContent.style.display = 'flex'
  survivalContent.style.flexWrap = 'wrap'
  sexContent.style.display = 'flex'
  sexContent.style.flexWrap = 'wrap'

}

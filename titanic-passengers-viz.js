const survived = document.getElementById('survived')
const sex = document.getElementById('sex')
const embarked = document.getElementById('embarked')

fetch('titanic-passengers.json')
    .then(res => res.json())
    .then(json => handleData(json))
    .catch(err => console.error(err.message))

function handleData(data) {
  const fields = data.map(passenger => passenger.fields)
  console.log(data)

  // TODO: Apply data viz on these fields
  // fare
  // passenger class 
  // sibling amount

  // survived
  fields.forEach( passenger => {
    const el = document.createElement('div')
    survived.appendChild(el)

    el.style.position = 'relative'
    el.style.width = '20px'
    el.style.height = '20px'
    el.style.margin = '1px'
    el.style.backgroundColor = 'orange'
    el.style.borderRadius = '50%';
    el.style.margin = '1px';
    el.style.backgroundColor = passenger.survived === 'No' ? 'gray' : 'red'

  });

  // sex
  fields.forEach( passenger => {
    const el = document.createElement('div')
    sex.appendChild(el)

    el.style.position = 'relative'
    el.style.width = '0'
    el.style.height = '0'
    el.style.borderLeft = '10px solid transparent'
    el.style.borderRight = '10px solid transparent'
    el.style.borderBottom = '20px solid'
    el.style.margin = '1px'
    el.style.margin = '1px';
    el.style.borderBottom = passenger.sex === 'female' ? '20px solid hotpink' : '20px solid blue'
  });

  //embarked
  fields.forEach( passenger => {
      const el = document.createElement('div')
      embarked.appendChild(el)

      el.style.width = '20px'
      el.style.height = '20px'
      el.style.borderRadius = '40%';
      el.style.margin = '1px';

      if (passenger.embarked === 'Q') {
        el.style.borderTop = '15px solid #003b00'
      } else if (passenger.embarked === 'S') {
        el.style.borderTop = '15px solid #008f11'
      } else if (passenger.embarked === 'C'){
        el.style.borderTop = '15px solid #00ff41'
      }else {
        el.style.borderTop = '15px solid #b2dda5'
      }
    });

  survived.style.display = 'flex'
  survived.style.flexWrap = 'wrap'
  sex.style.display = 'flex'
  sex.style.flexWrap = 'wrap'
  embarked.style.display = 'flex'
  embarked.style.flexWrap = 'wrap'

}

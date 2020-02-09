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
  fields.sort((a, b) => {
    return a.survived === 'Yes'?  -1 : 1
  })

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
  fields.sort((a, b) => {
    return a.sex === 'male'? -1: 1
  })

  fields.forEach( passenger => {
    const el = document.createElement('div')
    sex.appendChild(el)
    

  // fields.filter() 
//   Filters out the falsy values in an array.
// const filterFalsy = arr => arr.filter(Boolean);
// filterFalsy(['', true, {}, false, 'sample', 1, 0]);

  el.style.position = 'relative'
  el.style.width = '0'
  el.style.height = '0'
  el.style.borderLeft = '10px solid transparent'
  el.style.borderRight = '10px solid transparent'
  el.style.borderBottom = '20px solid'
  el.style.margin = '1px';
  el.style.borderBottom = passenger.sex === 'female' ? '20px solid hotpink' : '20px solid blue'
});


  
  //embarked
  fields.sort((a, b) => {
    return a.embarked === 'Q'? -1: 1
  })
  fields.sort((a, b) => {
    return a.embarked === 'S'? -1: 1
  })
  fields.sort((a, b) => {
    return a.embarked === 'C'? -1: 1
  })
  
  fields.forEach( (passenger) => {
      const el = document.createElement('div')
      embarked.appendChild(el)

      el.style.width = '20px';
      el.style.height = '5px';
      el.style.borderRadius = '40%';
      el.style.margin = '1px';

      if (passenger.embarked === 'Q') {
        el.style.borderTop = '15px solid white'
      } else if (passenger.embarked === 'C') {
        el.style.borderTop = '15px solid green'
      } else if (passenger.embarked === 'S'){
        el.style.borderTop = '15px solid blue'
      } else {
        el.style.borderTop = '15px solid purple'
      }
    });

  //pclass
  fields.forEach( passenger => {
    const el = document.createElement('div')
    pclass.appendChild(el)
    
    fields.sort((a, b) => {
      return a.pclass === '1'? -1: 1
    })
    fields.sort((a, b) => {
      return a.pclass === '2'? -1: 1
    })

    el.style.position = 'relative'
    el.style.width = '20px'
    el.style.height = '20px'
    el.style.margin = '2px'
    el.style.borderTopLeftRadius = '50%'
    el.style.borderBottomRightRadius = '50%'

    if (passenger.pclass === 3) {
      el.style.backgroundColor = 'yellow'
    } else if (passenger.pclass === 2) {
      el.style.backgroundColor = 'orange'
    } else {
      el.style.backgroundColor = 'white'
    }

    
    
  });

}

const passengerDiv = document.getElementById('main')
const buttonGender = document.getElementById('show-gender')
const buttonEmbarkedLocation = document.getElementById('show-embarked-location')

const elements = []
const passengerData = []

let showGender = false
let showEmbarkedLocation = false 
let showSurvived = false

fetch('titanic-passengers.json')
      .then(res => res.json())
      .then(json => {
        handleData(json)
      })

      function handleData(data) {
        const fields = data.map(passengers => passengers.fields)
        
        fields.forEach(passenger => {
          const el = document.createElement('div')
          passengerDiv.appendChild(el)
          elements.push(el)             // store the element
          passengerData.push(passenger) // Store the passenger
      
          el.style.position = 'relative'
          el.style.width = '10px'
          el.style.height = '10px'
          el.style.borderLeft = '10px solid transparent'
          el.style.borderRight = '10px solid transparent'
          el.style.backgroundColor = 'gray'
          el.style.margin = '1.5px'
          el.style.transition = '3s'
        });

        // console.log(data);
      }
     
      // console.log(showGender)

      buttonGender.addEventListener('click', (e) => {
        showGender = !showGender
        if (showGender) {
          e.target.style.backgroundColor = 'white'
          e.target.style.color = 'black'
          e.target.classList.add('button-selected')
          // selectButton(e.target, showGender)
          passengerData.forEach((passenger, i) => {
            elements[i].style.backgroundColor = passenger.sex === 'male' ? '#0000ff' : '#ff007f'
          })
          document.getElementById('show-gender').innerHTML = 'Reset'
        } else {
          e.target.classList.remove('button-selected')
          // selectButton(e.target, showGender)
          passengerData.forEach((passenger, i) => {
            elements[i].style.backgroundColor = "gray"
          })
          document.getElementById('show-gender').innerHTML = 'Show Gender'
        }
      })

      //embarked location
      buttonEmbarkedLocation.addEventListener('click', (e) => {
        showEmbarkedLocation = !showEmbarkedLocation
        if (showEmbarkedLocation) {
          e.target.style.backgroundColor = 'white'
          e.target.style.color = 'black'
          e.target.classList.add('button-selected')
      
          passengerData.forEach((passenger, i) => {
            
            if (passenger.embarked === 'Q') {
              elements[i].style.backgroundColor='black'
              elements[i].style.borderBottom = '5px solid #003b00'
            } else if (passenger.embarked === 'S') {
              elements[i].style.backgroundColor='black'
              elements[i].style.borderBottom = '5px solid #008f11'
            } else if (passenger.embarked === 'C'){
              elements[i].style.backgroundColor='black'
              elements[i].style.borderBottom = '5px solid #00ff41'
            } else {
              elements[i].style.backgroundColor='black'
              elements[i].style.borderBottom = '5px solid #b2dda5'
            }
          })
          document.getElementById('show-embarked-location').innerHTML = 'Reset'
        } else {
          e.target.classList.remove('button-selected')
     
          passengerData.forEach((passenger, i) => {
            elements[i].style.borderBottom= "5px solid gray"
            elements[i].style.backgroundColor='gray'
          })
          document.getElementById('show-embarked-location').innerHTML = 'Show Embarked Location'
        }
      })
      // function selectButton(el, state) {
      //   if (state == true) {
      //     if (el.sex === 'male') {
      //       el.style.backgroundColor = 'blue'
      //     } else {
      //       el.style.backgroundColor = 'pink'
      //     }
      //   } 
      // }


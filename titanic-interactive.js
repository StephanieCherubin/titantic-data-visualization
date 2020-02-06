const passengerDiv = document.getElementById('main')
const buttonGender = document.getElementById('show-gender')
const buttonEmbarkedLocation = document.getElementById('show-embarked-location')

const elements = []
const passengerData = []

let showGender = false
let showEmbarkedLocation = false 
let showSurvived = false

//bodyListener

const body = document.querySelector('body')
body.addEventListener('click',  (e) => {
  console.log(e.target.dataset.index);
  const index = e.target.dataset.index
  if (index !== undefined) {
    console.log(passengerData[index])
    showOverlay(index)
  }
  
})

// passenger.addEventListener('mouseover', (e) => {
//   const index = e.target.dataset.index
//   if (index === undefined) {
//     showOverlay(index)
//   }
// })

fetch('titanic-passengers.json')
      .then(res => res.json())
      .then(json => {
        handleData(json)
      })

      function handleData(data) {
        const fields = data.map(passengers => passengers.fields)
        
        fields.forEach((passenger, i )=> {
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
          el.style.transition = '2s'

          el.dataset.index = i
        });

        // console.log(data);
      }
     
      // console.log(showGender)
      function showOverlay(index) {
        const el = document.getElementById('passenger-info')
        const {name, fare, age, embarked, survived, sex} = passengerData[index]
        el.style.display = 'block'
        el.innerHTML = `
      
          <div>${name}</div>
          <div><span>Age:</span> ${age} </div>
          <div><span>Sex:</span> ${sex}</div>
          <div><span>Fare:</span> ${fare}</div>
          <div><span>Embarked Location:</span> ${embarked}</div>
          <div><span>Survived:</span> ${survived}</div>
        `
      }
      
      
      // function hideOverlay() {
      //   overlay.style.display = none
      // }
      
      // hideOverlay()

      buttonGender.addEventListener('click', (e) => {
        showGender = !showGender
        if (showGender) {
          e.target.style.backgroundColor = 'white'
          e.target.style.color = 'black'
          e.target.classList.add('button-selected')
          
          document.getElementById('show-gender').innerHTML = 'Reset Gender'
        } else {
          e.target.classList.remove('button-selected')
          
          document.getElementById('show-gender').innerHTML = 'Show Gender'
        }
        renderGender()
      })

      function renderGender() {
        if (showGender) {
        
          // selectButton(e.target, showGender)
          passengerData.forEach((passenger, i) => {
            elements[i].style.backgroundColor = passenger.sex === 'male' ? '#0000ff' : '#ff007f'
          })
        } else {
          passengerData.forEach((passenger, i) => {
            elements[i].style.backgroundColor = "gray"
          })
        }
      }
      //embarked location
      buttonEmbarkedLocation.addEventListener('click', (e) => {
        
        showEmbarkedLocation = !showEmbarkedLocation

        if (showEmbarkedLocation) {
          e.target.style.backgroundColor = 'white'
          e.target.style.color = 'black'
          e.target.classList.add('button-selected')
        } else {
          e.target.classList.remove('button-selected')
        }
        renderEmbarkedLocation()
      })


      function renderEmbarkedLocation() {
        
        if (showEmbarkedLocation) {

          passengerData.forEach((passenger, i) => {
            

            // #triangle-up {
            //   width: 0;
            //   height: 0;
            //   border-left: 50px solid transparent;
            //   border-right: 50px solid transparent;
            //   border-bottom: 100px solid red;
            // }

            if (passenger.embarked === 'Q') {
              elements[i].style.backgroundColor='black'
              elements[i].style.width = '0'
              elements[i].style.height = '0'
              elements[i].style.borderLeft = '10px solid transparent'
              elements[i].style.borderRight = '10px solid transparent'
              elements[i].style.borderBottom = '20px solid #003b00 '
            } else if (passenger.embarked === 'S') {
              elements[i].style.backgroundColor='black'
              elements[i].style.width = '0'
              elements[i].style.height = '0'
              elements[i].style.borderLeft = '10px solid transparent'
              elements[i].style.borderRight = '10px solid transparent'
              elements[i].style.borderBottom = '20px solid #008f11'
            } else if (passenger.embarked === 'C'){
              elements[i].style.backgroundColor='black'
              elements[i].style.width = '0'
              elements[i].style.height = '0'
              elements[i].style.borderLeft = '10px solid transparent'
              elements[i].style.borderRight = '10px solid transparent'
              elements[i].style.borderBottom = '20px solid #00ff41'
            } else {
              elements[i].style.backgroundColor='black'
              elements[i].style.width = '0'
              elements[i].style.height = '0'
              elements[i].style.borderLeft = '10px solid transparent'
              elements[i].style.borderRight = '10px solid transparent'
              elements[i].style.borderBottom = '20px solid #b2dda5'
            }
          })
          document.getElementById('show-embarked-location').innerHTML = 'Reset Embarked Location'
        } else {
     
          passengerData.forEach((passenger, i) => {
            elements[i].style.borderBottom= "10px solid gray"
            elements[i].style.backgroundColor='gray'
          })
          document.getElementById('show-embarked-location').innerHTML = 'Show Embarked Location'
        }
      }
      

function sortByGender() {
  // sort passengers by gender

  //add all render functions below
  renderEmbarkedLocation()
  renderGender()
}
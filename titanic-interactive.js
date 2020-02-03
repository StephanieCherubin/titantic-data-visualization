const passengerDiv = document.getElementById('main')
const buttonGender = document.getElementById('show-gender')
const buttonEmbarked = document.getElementById('show-embarked')

const elements = []
const passengerData = []

let showGender = false
let showEmbarked = false 
let showSurvived = false

fetch('titanic-passengers.json')
      .then(res => res.json())
      .then(json => {
        handleData(json)
      })

      function handleData(data) {
        const fields = data.map(passengers => passengers.fields)
        console.log(data);
        genderGraph(fields)
      }

      // Handle interaction
     
      // console.log(showGender)


      function genderGraph (fields) {
        fields.forEach(passenger => {
          //make an element
          const el = document.createElement('div')
          //attach the element to the dom 
          gender.appendChild(el)
          //styling element 
          el.style.width = '10px'
          el.style.height = '10px'
          el.style.margin = '1px'
          el.style.backgroundColor = 'gray'
          el.style.transition = '2s'
        }) 
      }

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
        } else {
          e.target.style.backgroundColor = 'black'
          e.target.style.color = 'white'
          e.target.classList.remove('button-selected')
          // selectButton(e.target, showGender)
          passengerData.forEach((passenger, i) => {
            elements[i].style.backgroundColor = "gray"
          })
        }
      })

      function selectButton(el, state) {
        if (state == true) {
          if (el.sex === 'male') {
            el.style.backgroundColor = 'blue'
          } else {
            el.style.backgroundColor = 'pink'
          }
        } 
      }

function handleData(data) {
  const fields = data.map(({ fields }) => fields)

  fields.forEach(passenger => {
    const el = document.createElement('div')
    passengerDiv.appendChild(el)
    elements.push(el)             // store the element
    passengerData.push(passenger) // Store the passenger

    el.style.width = '14px'
    el.style.height = '14px'
    el.style.backgroundColor = 'gray'
    el.style.margin = '1px'
    el.style.transition = '200ms'
    el.style.boxSizing = 'border-box'
  });
}

function displayByGender() {
  passengerData.forEach((obj, i) => {
    const el = elements[i]
    const color = obj.sex === 'male' ? 'blue' : 'pink'
    el.style.backgroundColor = showGender ? color : 'white'
  })
}

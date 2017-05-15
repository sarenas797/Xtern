const personForm = document.querySelector('form')

const renderColor= (hairColor) => {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = hairColor
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'
    return colorDiv
}


personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const birthPlace = form.birthplace.value
    const age = form.age.value

    const name = document.createElement('li')
    name.textContent = "Name: " + personName

    const hair = document.createElement("li")
    hair.textContent="Hair Color: "

    const colorDiv = renderColor(hairColor)

    const old = document.createElement('li')
    old.textContent ="Age: " + age

    const birth = document.createElement('li')
    birth.textContent ="Birthplace: " + birthPlace


    details.appendChild(name)
    details.appendChild(hair)
    details.appendChild(colorDiv)
    details.appendChild(old)
    details.appendChild(birth)

    //details.innerHTML = `
    //<ul>
        //<li>Name: ${personName}</li>
        //<li>Hair Color: ${colorDiv.outerHTML}</li>
        //<li>Age: ${age} </li>
        //<li>Birth Place: ${birthPlace} </li>
    //</ul>`
}
    personForm.addEventListener('submit', handleSubmit)

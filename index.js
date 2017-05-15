const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const personName = form.personName.value
    const hairColor = form.hairColor.value
    const birthPlace = form.birthplace.value
    const age = form.age.value

    const em = document.createElement('em')
    em.textContent = personName

    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = hairColor
    colorDiv.style.height = '50px'
    colorDiv.style.width = '100px'

    const old = document.createElement('old')
    old.textContent = age

    const birth = document.createElement('birth')
    birth.textContent = birthPlace

    details.innerHTML = `
    <ul>
        <li>Name: ${personName}</li>
        <li>Hair Color: ${colorDiv.outerHTML}</li>
        <li>Age; ${age} </li>
        <li>Birth Place ${birth} </li>
    </ul>
    `

}
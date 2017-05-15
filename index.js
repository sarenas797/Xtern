const personForm = document.querySelector('form')

personForm.onsubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const details = document.querySelector('.details')

    const peronsName = form.personName.value
    details.innerHTML = `<em>${personName}</em>`
}
const App = ()=>{
    const nameForm = document.querySelector('form')
    const list = document.querySelector('.list')

    const submit = (ev) =>{
        ev.preventDefault()
        const form = ev.target
        
        const personName = form.Name.value
        const name = document.createElement('li')
        const buttonDelete = document.createElement('button')
        buttonDelete.innerHTML="delete"
        name.textContent = personName

        list.insertBefore(buttonDelete, list.children[0])
        list.insertBefore(name, list.children[0])
        
        buttonDelete.addEventListener('click', function(){ 
            let i = 0
            for(i=0; i<list.childElementCount; i++){
                let search=list.childNodes[i].textContent
                if(search === name.textContent){
                    break
                }
            }
            list.removeChild(list.childNodes[i])
            list.removeChild(list.childNodes[i])
        })

        
        
    }

    nameForm.addEventListener('submit',submit)
}
App()
   






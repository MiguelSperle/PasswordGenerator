let generator = document.querySelector('.input-generator-password')
generator.addEventListener('click', (event) => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";

    let passwordLength = 15 // tamanho da senha
    let password = ''

    
   
    for(let x = 0; x < passwordLength; x++){
  
        let randowPassword = (Math.random() * chars.length)
        password += chars.substring(randowPassword, randowPassword + 1)
    }
    

    let ShowPassword = document.querySelector('.input-password') // onde vai mostrar a senha
    ShowPassword.innerHTML = password 

 


    let copyPassword = document.querySelector('.copyPassword')
    copyPassword.addEventListener('click', () => {
       if(copyPassword){
        navigator.clipboard.writeText(ShowPassword.textContent)
        alert('Texto Copiado!')
       }
    })
})



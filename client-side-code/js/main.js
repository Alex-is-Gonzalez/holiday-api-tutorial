document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const month = document.querySelector('input').value
    try{
        const response = await fetch(`https://custom-holiday-api.herokuapp.com/api/${month}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.name
    }catch(error){
        console.log(error)
    }
}
document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest (){
    const month = document.querySelector('input').value
    try {
        const res = await fetch(`https://custom-holiday-api.herokuapp.com/api/${month}`)
        const data = await res.json()

        console.log(data.name)
        document.querySelector('h2'). innerText = data.name
    }
    catch (err) {
        console.log(err)
    }
}
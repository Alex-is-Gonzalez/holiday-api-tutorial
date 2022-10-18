document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest (){
    const month = document.querySelector('input').value
    try {
        const res = await fetch(`http://localhost:8000/api/${month}`)
        const data = await res.json()

        console.log(data.name)
        document.querySelector('h2'). innerHTML = data.name
    }
    catch (err) {
        console.log(err)
    }
}
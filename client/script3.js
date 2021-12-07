async function getByID() {
    let address = './api/' + document.querySelector('#earthquakeid').value
    const message = document.querySelector('#results')
    console.log(address)
    const earthquake = await fetch(address).then(response => response.json())
    console.log(earthquake)
    message.innerHTML = `<p>${(earthquake[0].City)}</p>`
}

const send = document.querySelector('#submitID');
send.onclick = getByID;
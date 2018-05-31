var socket = io()
$(() => {
    $("#send").click(()=>{
        var message = {
            "name": $("#name").val(),
            "message": $("#message").val()
        }
        postMessage(message)
    })
    getMessages()
})

socket.on('message', addMessages)

function addMessages(message) {
    $("#messages").append(`
        <section class="message">
        <h4>${message.name} </h4>
        <p>${message.message}</p>
        </section>
    `)
}

function getMessages() {
    $.get('http://localhost:3000/messages', (data) => {
        data.forEach(addMessages);
    })
}

function postMessage(message) {
    console.log(message);
    $.post("http://localhost:3000/messages", message)
    // .then(addMessages(message))
}
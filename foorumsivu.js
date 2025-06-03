const messages = [
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "looking for someone",
        "body": "Hi, I'm looking for someone I used to know in high school. I'm wondering if I could find him here?"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Let's ask around. What's his name?"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Yeah, his name is Seymore Butz."
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Is there a Butz here? Everybody! I wanna Seymore Butz!"
    },
    {
        "sender": "Barney",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "LOL"
    },
    {
        "sender": "Moe",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "Oh, wait a minute. Listen you little scum-sucking pus bucket. When I get my hands on you, I'm gonna pull out your eyeballs with a corkscrew!"
    },
    {
        "sender": "mr customer",
        "date": "2010-05-10",
        "title": "re: looking for someone",
        "body": "😂😂😂😂😂😂😂😂😂😂😂"
    }
]
function displayMessages() {
    const messageBoard = document.getElementById("messageBoard");
    messageBoard.innerHTML = "";

    messages.forEach(msg => {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        const oldDate = new Date(msg.date);
        msg.date = `${oldDate.getDate()}.${oldDate.getMonth() + 1}.${oldDate.getFullYear()}`;



        messageDiv.innerHTML = `
            <p><strong>${msg.sender}</strong> - ${msg.date}</p>
            <h4>${msg.title}</h4>
            <p>${msg.body}</p>
        `;

        messageBoard.appendChild(messageDiv);
    });
}

document.addEventListener("DOMContentLoaded", displayMessages);
function openDialog() {
    let form = document.querySelector("#messageDialog form"); 
    form.reset();
    
    document.getElementById("messageDialog").showModal(); 
}
function newMessage(event) {
    event.preventDefault();
    const sender = document.getElementById("nimi").value;
    const title = document.getElementById("otsikko").value;
    const message = document.getElementById("message").value;
    const currentDate = new Date();
    const formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
            
    const uusimessage = { "sender": sender, "date": formatDate, "title": title, "body": message };
    messages.unshift(uusimessage);
    
    displayMessages();
    document.getElementById("messageDialog").close();

    
}


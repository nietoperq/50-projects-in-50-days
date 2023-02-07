const chat = document.getElementById('chat');
const jokeBtn = document.getElementById('jokeBtn');

generateJoke();

jokeBtn.addEventListener('click', generateJoke);

async function generateJoke() {

    jokeBtn.disabled = true;

    const message = document.createElement('div');
    message.classList.add('message', 'response');

    const joke = document.createElement('div');
    joke.classList.add('message', 'joke');

    message.innerHTML = `Can you tell me a joke?`;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();

    await new Promise(r => setTimeout(r, 500));

    joke.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;
    chat.appendChild(joke);
    chat.scrollTop = chat.scrollHeight;

    await new Promise(r => setTimeout(r, 1500));

    joke.innerHTML = `${data.joke}`;
    chat.scrollTop = chat.scrollHeight;

    jokeBtn.disabled = false;
};
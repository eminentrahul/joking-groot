
// VoiceRSS Javascript SDK
const audioElement = document.getElementById('audio');
const button = document.getElementById('button');



// Get jokes



async function getJokes() {

    const apiUrl = 'https://sv443.net/jokeapi/v2/joke/Any?type=twopart';
    let joke = '';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup}.....${data.delivery}`;

        } else {
            joke = data.joke;
        }
        // console.log(joke);
        test(joke);
        toggleButton();

    } catch(err) {
        console.log('Fetch failed', err);
    }

}

function toggleButton() {
    button.disabled = !button.disabled
}

function test(joke){

    const jokeString = joke.trim().replace(/ /g, '%20');

    VoiceRSS.speech({
        key: '90deeb6417714540b646cc7d59d59bb2',
        src: jokeString,
        hl: 'en-us',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo'

    });

}

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
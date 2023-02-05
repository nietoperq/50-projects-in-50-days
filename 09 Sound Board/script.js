const sounds = ['applause', 'boo', 'gasp', 'tada', 'wrong'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSounds();
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

function stopSounds() {
    sounds.forEach(sound => {
        const s = document.getElementById(sound);
        s.pause();
        s.currentTime = 0;
    });
};
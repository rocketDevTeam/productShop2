const validName = "Ann";
const validSurname = "Kuhir";
const secretName = "Taras";
const secretSurname = "Pavlenko";
const whoAreYou = new Audio('media/who-are-you.mp3');
const success = new Audio('media/kids-cheering.mp3');
const thugLive = new Audio('media/thug-life.mp3');
const happyBirthday = new Audio('media/happy-birthday.mp3');
let wrapper = null
const onSubmit = () => {
    wrapper = document.getElementById('wrapper-main');
    const form = document.querySelector('form');
    var formData = new FormData(form);
    const name = formData.get('name');
    const surname = formData.get('surname');
    if (name === validName && surname === validSurname) {
        success.play();
        customAlert('Welcome, HONEY (◍•ᴗ•◍)', success, true);

    } else if (name === secretName && surname === secretSurname) {
        thugLive.play();
        bossAlert(thugLive)
        form.reset();
    } else {
        whoAreYou.play();
        strangerAlert('Who are you, STRANGER?', whoAreYou)
        form.reset();
    }

}
const customAlert = async (message, sound, isLogin) => {
    if (message) {
        const form = document.querySelector('form');
        form.style.display = 'none';
        const wrapper = document.getElementById('wrapper-main');
        const mess = document.createElement('span');
        mess.innerText = message;
        mess.className = 'message'
        wrapper.append(mess)
        const duration = sound.duration * 1000;

        setTimeout(() => {
            mess.style.display = 'none';
            if (!isLogin) {
                form.style.display = 'flex';
            } else{
                showCake();
            }
        }, duration);
    }
}

const showCake = () => {
    debugger;
    wrapper.style.backgroundColor = 'black';
    happyBirthday.play();
    const cake = document.createElement('div')
    const candle = document.createElement('div')
    const flame = document.createElement('div')
    const shadows = document.createElement('div')
    const top = document.createElement('div')
    const bottom = document.createElement('div')
    const wick = document.createElement('div')

    const cakeImg = document.createElement('img')

    cake.className = 'cake';
    candle.className = 'candle';
    flame.className = 'flame';
    shadows.className = 'shadows'
    top.className = 'top'
    bottom.className = 'bottom'
    wick.className = 'wick'

    cakeImg.src = 'media/cake.png'

    flame.appendChild(shadows);
    flame.appendChild(top);
    flame.appendChild(bottom);

    candle.appendChild(flame);
    candle.appendChild(wick);

    cake.appendChild(candle);
    cake.appendChild(cakeImg);
    wrapper.appendChild(cake);
}

const strangerAlert = (message, sound) => {
    if (message) {
        const form = document.querySelector('form');
        form.style.display = 'none';
        const img = document.createElement('img');
        img.src = 'media/suspect.png'
        img.className = 'stranger-img';
        wrapper.append(img)
        const duration = sound.duration * 1000;
        setTimeout(() => {
            img.style.display = 'none';
            form.style.display = 'flex';
        }, duration);
    }
}
const bossAlert = ( sound) => {
        const form = document.querySelector('form');
        form.style.display = 'none';
        const img = document.createElement('img');
        img.src = 'media/boss.png'
        img.className = 'stranger-img';
        wrapper.append(img)
        const duration = sound.duration * 1000;
        setTimeout(() => {
            img.style.display = 'none';
            form.style.display = 'flex';
        }, duration);
}
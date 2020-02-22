const validName = "Ann";
const validSurname = "Kuhir";
const secretName = "Taras";
const secretSurname = "Pavlenko";
const whoAreYou = new Audio('media/who-are-you.mp3');
const success = new Audio('media/kids-cheering.mp3');
const thugLive = new Audio('media/thug-life.mp3');
const onSubmit = () => {
    const form = document.querySelector('form');
    var formData = new FormData(form);
    const name = formData.get('name');
    const surname = formData.get('surname');
    if (name === validName && surname === validSurname) {
        success.play();
        customAlert('Welcome, HONEY (◍•ᴗ•◍)', success, true)

    } else if (name === secretName && surname === secretSurname) {
        thugLive.play();
        customAlert('He loves YOU!!!', thugLive)
        form.reset();
    } else {
        whoAreYou.play();
        strangerAlert('Who are you, STRANGER?', whoAreYou)
        form.reset();
    }

}

const customAlert = (message, sound, isLogin) => {
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
            }
        }, duration);
    }
}

const strangerAlert = (message, sound) => {
    if (message) {
        const form = document.querySelector('form');
        form.style.display = 'none';
        const wrapper = document.getElementById('wrapper-main');
        const mess = document.createElement('span');
        mess.innerText = message;
        mess.className = 'message';
        wrapper.append(mess)
        const duration = sound.duration * 1000;
        setTimeout(() => {
            mess.style.display = 'none';
            if (!isLogin) {
                form.style.display = 'flex';
            }
        }, duration);
    }
}
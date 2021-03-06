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
            } else {
                showCake();
            }
        }, duration);
    }
}

const showCake = () => {
    debugger;
    let innerSize = -300;
    const fixSize = (window.innerWidth - 300)/2;
    wrapper.style.backgroundColor = 'black';
    happyBirthday.play();
    const cakeWrapper = document.createElement('div')
    const flame = document.createElement('div')
    const cake = document.createElement('div')
    const cakeImg = document.createElement('img')
    cakeWrapper.className = 'cake-wrapper'
    cakeWrapper.style.left = `${innerSize}px`;
    cake.className = 'cake';
    flame.className = 'flame';
    flame.id = 'flame-id';
    cakeImg.src = 'media/cake2.png'
    cake.appendChild(cakeImg);
    
    cakeWrapper.appendChild(flame);
    cakeWrapper.appendChild(cake);

    wrapper.appendChild(cakeWrapper);

   const id = setInterval( () => {
    innerSize++
        if(innerSize >= fixSize){
            clearInterval(id);
        }
        cakeWrapper.style.left = `${innerSize}px`;
    }, 35);

}

const blowHandler = () => {
    const flame = document.getElementById('flame-id');
    flame.style.display ='none';
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
const bossAlert = (sound) => {
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
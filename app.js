

// random user
// api
// fetch

const api_url = 'https://randomuser.me/api/'

// DOM
const imgEl = document.querySelector('img')
const btn = document.querySelector('.button')
const text = document.querySelector('.text')
const btns = document.querySelectorAll('button')

let userInfo = {}

btns.forEach((btn , index)=> {
    btn.addEventListener('mouseenter', () => {
        console.log('90');
        if(index === 0){
            text.innerHTML = `
            Hello my email is <h4>${userInfo.email}</h4>
            `
        }else if(index === 1){
            text.innerHTML = `
            Hello my name is <h4>${userInfo.name.first + userInfo.name.last9 }</h4> `

        }else if(index === 2 ){
            const d = new Date(userInfo.dob.date)
            text.innerHTML = `My birthday is <h4>/${d.getDate()}/${d.getFullYear()}</h4> 
            `
        }else if(index === 3){
            text.innerHTML = `My address is <h4>${userInfo.location.city}</h4>
            `
        }else if(index === 4){
            text.innerHTML = `My phone number <h4>${userInfo.phone}</h4>
            `
        }else if(index === 5){
            text.innerHTML = `My password is <h4>${userInfo.login.password}
            `
        }
    })
})


async function getRandomUser(){
    const response = await fetch(api_url)
    const userData = await response.json()

    console.log(userData);
    renderUser(userData.results[0])
}

getRandomUser()

function renderUser(user = {}){
    imgEl.src = user.picture.large
    userInfo = user
}

btn.addEventListener('click', getRandomUser)



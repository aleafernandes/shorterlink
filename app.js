// https://api.shrtco.de/v2/
// /shorten
// GET/POST: https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html
const gBtn = document.getElementById('genBtn')
const cBtn = document.getElementById('copyBtn')
let inputLink = document.getElementById('shortlink-input')
let afterLink = document.getElementById('shtLink')
let prevLink = document.getElementById('usedLink')
const mBtn = document.getElementById('burger')
const fLink = document.getElementById('shortlink-section')
const pLink = document.getElementById('aftersect')
const mMobile = document.getElementById('hiddenBtn')


async function shorter(){
  
    const lLink = await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink.value}`)
    const sLink = await lLink.json()
    const shrtLink = `https://shrtco.de/${sLink.result.code}`
    prevLink.innerHTML = inputLink.value
    afterLink.innerHTML = shrtLink
    return sLink
}


gBtn.addEventListener('click', async () => {
    let outLink = []

    try{
        outLink = await shorter()
    } catch (e){
        console.log('Error!')
        console.log(e)
    }

})


function copy(){
    navigator.clipboard.writeText(afterLink.innerText)
}

function openMenu(){
    mMobile.style.display == 'none' ? mMobile.style.display = 'block' : mMobile.style.display = 'none'
}




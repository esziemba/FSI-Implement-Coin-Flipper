// TODO: Declare any global variables we need
let headFlips = 0
let tailFlips = 0

// TODO: Create any elements we need
// Accessing the div for all elements of the game
let game = document.querySelector('#game')

// creating img element and appending page
let penny = document.createElement('img')
penny.src = './assets/images/penny-heads.jpg'
penny.setAttribute('id', 'penny.image')
game.append(penny)

// creating div with border controls
let controls = document.createElement('div')
controls.setAttribute('class', 'controls')
game.append(controls)

// creating flip button
let flip = document.createElement('button')
flip.setAttribute('id', 'flip')
flip.textContent = 'Flip the penny!'
controls.append(flip)

// creating clear
let clear = document.createElement('button')
clear.setAttribute('id', 'clear')
clear.textContent = 'Clear Scoreboard'
controls.append(clear)

// create message
let message = document.createElement('h3')
message.setAttribute('id', 'message')
message.textContent = 'Let\'s Get Flipping'
game.append(message)

document.addEventListener('DOMContentLoaded', function () {
    let total = 0

    flip.addEventListener('click', function () {
        let flipHeads = Math.random() < 0.5

        if (flipHeads) {
            penny.src = './assets/images/penny-heads.jpg'
            headFlips++
            message.textContent = 'You flipped heads!'
        } else {
            penny.src = './assets/images/penny-tails.jpg'
            tailFlips++
            message.textContent = 'You flipped tails!'
        }
        let hScore = document.querySelector('#heads')
        hScore.textContent = headFlips

        let tScore = document.querySelector('#tails')
        tScore.textContent = tailFlips
        total++

        let pHeads = `${Math.round(headFlips/total * 100)}%`
        let pTails = `${Math.round(tailFlips/total * 100)}%`

        let hPercent = document.querySelector('#heads-percent')
        hPercent.textContent = pHeads
        let tPercent = document.querySelector('#tails-percent')
        tPercent.textContent = pTails
    })
    
    clear.addEventListener('click', function () {
        let tails = 0
        let heads = 0
        let tailsPercent = 0
        let headsPercent = 0

        let tailsTotal = document.querySelector('#tails')
        tailsTotal.textContent = tails
        let headsTotal = document.querySelector('#heads')
        headsTotal.textContent = heads

        let tailsPercentTotal = document.querySelector('#tails-percent')
        tailsPercentTotal.textContent = tailsPercent
        let headsPercentTotal = document.querySelector('#heads-percent')
        headsPercentTotal.textContent = headsPercent

        
    })

})
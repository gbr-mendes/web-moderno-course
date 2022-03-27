//Flight control
let flight = false
document.body.onkeydown = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        flight=true
    }
}

document.body.onkeyup = function (e) {
    if (e.key == " " ||
        e.code == "Space" ||
        e.keyCode == 32
    ) {
        flight=false
    }
}

const updateScore = function(){
    const htmlScoreElement = document.querySelector('#score')
    const score = Number.parseInt(htmlScoreElement.innerText)
    htmlScoreElement.innerText = score + 1

    
}

const checkColision = function(bird, obstacle) {
    const obstacleWidth = Number.parseFloat(getComputedStyle(obstacle, null).width.split('px').join(''))
    const positionObstacle = Number.parseFloat(getComputedStyle(obstacle, null).left.split('px').join('')) + obstacleWidth
    
    const birdWidth = Number.parseFloat(getComputedStyle(bird, null).width.split('px').join(''))
    const positionBird = Number.parseFloat(getComputedStyle(bird, null).left.split('px').join('')) + birdWidth
    if(positionObstacle - birdWidth <= positionBird) {
        return true
    }else{
        return false
    }
}

const failedGameCheck = function(intervalBird,intervalObstacle, intervalMoviment) {
    const bird = document.querySelector('.bird')
    const birdTop = Number.parseFloat(getComputedStyle(bird, null).top.split('px').join(''))
    const birdBottom = Number.parseFloat(getComputedStyle(bird, null).bottom.split('px').join(''))
    const obstacle = document.querySelector('.obstacle')
    const obstacleUp = obstacle.firstChild
    const obstacleDown = obstacle.lastChild
    const obstacleUpHeight = Number.parseFloat(obstacleUp.style.height.split('px').join(''))
    const obstacleDownHeight = Number.parseFloat(obstacleDown.style.height.split('px').join(''))
    if((obstacleUpHeight >= birdTop || obstacleDownHeight>=birdBottom) && checkColision(bird, obstacle)){
        clearInterval(intervalBird)
        clearInterval(intervalMoviment)
        clearInterval(intervalObstacle)
    }
}

const generateObstacleHeights = function (min, max) {
    min > max ? [min, max] = [max, min] : [min, max] = [min, max]
    const upHeight = Math.ceil(Math.random() * (max - min) + min)
    const downHeight = Math.ceil(Math.random() * (max - upHeight - min) + min)
    return [upHeight, downHeight]
}

const generateObstacle = function () {
    // Create element and it's children
    const obstacleContainer = document.createElement('div')
    const obstacleUp = document.createElement('div')
    const obstacleDown = document.createElement('div')
    //set classes to container and it's childrem
    obstacleContainer.classList.add('obstacle')
    obstacleUp.classList.add('obstacle-up')
    obstacleDown.classList.add('obstacle-down')

    // define height of children
    const heights = generateObstacleHeights(0, 70)
    obstacleUp.style.height = `${heights[0]}%`
    obstacleDown.style.height = `${heights[1]}%`

    //append children to parent
    obstacleContainer.appendChild(obstacleUp)
    obstacleContainer.appendChild(obstacleDown)

    //return parent
    return obstacleContainer
}

const appendObstacle = function () {
    const gameArea = document.querySelector('.game-area')
    const obstacleContainer = generateObstacle()
    gameArea.appendChild(obstacleContainer)
}

const moveObstacle = obstacle => {
    const right = getComputedStyle(obstacle, null).right.split('px').join('')
    obstacle.style.right = `${Number.parseFloat(right) + 1}px`
}

const startMoviment = function (obstacle, intervalBird, intervalObstacle) {
    const intervalMoviment = setInterval(() => {
        moveObstacle(obstacle)
        const left = getComputedStyle(obstacle, null).left.split('px').join('')
        const gameArea = document.querySelector('.game-area')
        if (Number.parseFloat(left) < -150) {
            clearInterval(intervalMoviment)
            updateScore()
            gameArea.removeChild(obstacle)
        }
        failedGameCheck(intervalBird, intervalObstacle, intervalMoviment)
    }, 1)
}

const startGame = function () {
    const gameArea = document.querySelector('.game-area')
    const maxHeight = getComputedStyle(gameArea, null).height.split('px').join('')
    const intervalBird = setInterval(()=>{
        const bird = document.querySelector('.bird')
        const birdHeight = getComputedStyle(bird, null).height.split('px').join('')
        const birdBottom = getComputedStyle(bird, null).bottom.split('px').join('')
        if(flight){
            if(Number.parseFloat(birdBottom) < maxHeight - birdHeight){
                bird.style.bottom = `${Number.parseFloat(birdBottom) + 10}px`
            }
        }else{
            if(Number.parseFloat(birdBottom) >0){
                bird.style.bottom = `${Number.parseFloat(birdBottom) - 10}px`
            }
            
        }
    },50)
    const intervalObstacle = setInterval(() => {
        appendObstacle()
        const obstacle = gameArea.lastElementChild
        startMoviment(obstacle, intervalBird, intervalObstacle)
    }, 1500)
}

startGame()
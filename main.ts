input.onButtonPressed(Button.A, function () {
    tool = 0
})
input.onGesture(Gesture.Shake, function () {
    tool = randint(0, 2)
    if (tool == 0) {
        radio.sendString("papel")
        basic.showIcon(IconNames.Square)
    } else if (tool == 1) {
        radio.sendString("tijeras")
        basic.showIcon(IconNames.Scissors)
    } else {
        radio.sendString("piedras")
        basic.showIcon(IconNames.SmallSquare)
        if (piedra == piedra) {
            basic.pause(200)
            basic.showString("empate")
        }
        if (papel == piedra) {
            basic.pause(200)
            basic.showString("has ganado")
        }
        if (tijera == papel) {
            basic.pause(200)
            basic.showString("has ganado")
        }
        if (tijera == piedra) {
            basic.pause(200)
            basic.showString("has perdido")
        }
        if (piedra == tijera) {
            basic.pause(200)
            basic.showString("has ganado")
        }
    }
})
radio.onReceivedString(function (receivedString) {
    tool = randint(0, 2)
    if (tool == 0) {
        radio.sendString("papel")
        basic.showIcon(IconNames.Square)
    } else if (tool == 1) {
        radio.sendString("tijeras")
        basic.showIcon(IconNames.Scissors)
    } else {
        radio.sendString("piedras")
        basic.showIcon(IconNames.SmallSquare)
        if (piedra == piedra) {
            basic.pause(200)
            basic.showString("empate")
        }
        if (papel == piedra) {
            basic.pause(200)
            basic.showString("has ganado")
        }
        if (tijera == papel) {
            basic.pause(200)
            basic.showString("has ganado")
        }
        if (tijera == piedra) {
            basic.pause(200)
            basic.showString("has perdido")
        }
        if (piedra == tijera) {
            basic.pause(200)
            basic.showString("has ganado")
        }
    }
})
input.onButtonPressed(Button.B, function () {
    tool = 1
})
let tijera = 0
let papel = 0
let piedra = 0
let tool = 0
radio.setGroup(69)

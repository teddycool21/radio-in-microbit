input.onButtonPressed(Button.A, function () {
    radio.sendString("YES")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("NO")
})
radio.setGroup(1)
basic.forever(function () {
	
})

let light_level = 0
basic.showString("¡BitO!")
basic.forever(function () {
    light_level = input.lightLevel()
    led.plotBarGraph(
    light_level,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(light_level)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(light_level)
    }
})
basic.forever(function () {
    while (light_level >= 0) {
        pins.analogWritePin(AnalogPin.P0, light_level + 75)
        basic.pause(100)
    }
})

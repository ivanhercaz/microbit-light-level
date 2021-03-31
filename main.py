light_level = 0
basic.show_string("¡BitO!")

def on_forever():
    global light_level
    light_level = input.light_level()
    led.plot_bar_graph(light_level, 255)
    if input.button_is_pressed(Button.A):
        basic.show_number(light_level)
    if input.button_is_pressed(Button.B):
        basic.show_number(light_level)
basic.forever(on_forever)

def on_forever2():
    while light_level >= 0:
        pins.analog_write_pin(AnalogPin.P0, light_level + 75)
        basic.pause(100)
basic.forever(on_forever2)

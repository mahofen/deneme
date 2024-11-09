let TemperatureCelsius = 0
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
OLED.init(64, 128)
weatherbit.startWeatherMonitoring()
OLED.showString("Temperature Project")
TemperatureCelsius = weatherbit.temperature() / 100
basic.forever(() => {
    basic.showString("C:")
    OLED.showString("Temp_C:")
    basic.showNumber(TemperatureCelsius)
    OLED.showNumber(TemperatureCelsius)
})
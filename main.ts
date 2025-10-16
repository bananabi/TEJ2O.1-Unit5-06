/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Arthur
 * Created on: Oct 2025
 * This program gets the distance between objects.
*/

// variables
let distanceToObject: number = 0

//setup 
basic.showIcon(IconNames.Happy)

// find distance to object 
input.onButtonPressed(Button.A, function() {
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.clearScreen()
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})

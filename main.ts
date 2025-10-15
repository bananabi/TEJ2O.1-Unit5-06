/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: arthur
 * Created on: Sep 2025
 * This program gets the distance between objects
*/

// variables
let distanceToObject: number = 0

//setup 
basic.showIcon(IconNames.Happy)

// find distance to object 
input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})

GLOBAL SCOPE:
    VARIABLE1: bottle_state
    Initialized: undefined
    Purpose: It shows water level in the bottle

    VARIABLE2: extra_water
    Initialized: undefined
    Purpose: It shows extra water

read_water_level: function
    ARGS:1

    bottle_state: DOM object
    PURPOSE: This function reads water level in the bottle
    BEHAVIOR: It calls bottle state of water 


drink_water: function
    ARGS: 2

    bottle_fullness: first argument
    PURPOSE: It shows the water level in the bottle at the initial stage

    thirst_score: second argument
    PURPOSE: It shows the thirst level

    bottle_size: third argument
    PURPOSE: It tells us the size of the bottle so we know the maximum quantity of water which can be filled into the bottle

    RETURN: An object 

    VARIABLE1 (new_bottle_state): number between 0 & bottle_state
    Initialized: undefined

    VARIABLE2 (remaining_thirst): number greater than 0 
    Initialized: undefined

    BEHAVIOR: This function calculates the new bottle state after drinking and our remaining thirst score. Then it returns an object with new variables mentioned before.

fill_bottle_with_water : function 
    ARGS: 3

    RETURN: An Object

    bottle_fullness: number, which is less than bottle_size
    PURPOSE: It shows the water level in the bottle at the initial stage

    bottle_size: number, which is greater than 0
    PURPOSE: It tells us the size of the bottle

    water_purchased: number, which is equal or greater than 0
    PURPOSE: It tells us the quantity of the purchased water

    VARIABLE1 (new_bottle_state_to_fill):number between 0 and bottle_size
    Initialized: undefined
        PURPOSE: We will know how much units we need to fullfill the bottle.

    VARIABLE2 (water_left_over): number between 0 and water_purchased
    Initialized: undefined

    BEHAVIOR: This function calculates the new bottle state after being filled with purchased water and the amount of water remaining after filling.


    
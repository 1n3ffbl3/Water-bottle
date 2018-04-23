// FP: functionality supplied with data

// state: 
//  bottle_state -> init 0
//  bottle_size ->  5 liters
//  l-m > 1 liter


let bottle_state = 0;
let extra_water= 0;

const bottle_size = 5;

// user stories:
//  read water level
//  drink water
//  fill bottle with water

function read_water_level(bottle_state){
    console.log(bottle_state)
};

function drink_water(bottle_fullness, thirst_score, bottle_size) {
    let new_bottle_state = 0;
    let remaining_thirst = 0;
    if (bottle_fullness > 0 && thirst_score > 0) {
        if (bottle_fullness > thirst_score) {
            new_bottle_state = bottle_fullness - thirst_score;
            remaining_thirst = 0;
        } else if (bottle_fullness < thirst_score) {
            new_bottle_state = bottle_size;
            remaining_thirst = bottle_size - thirst_score;
        } else {
            new_bottle_state = 0;
            remaining_thirst = 0;
        }
    } else {
        console.error("error");
    }
    return { new_bottle_state, remaining_thirst }; // es6 syntax 
};

console.log(drink_water(200, 100, 600));
        
    // = return {new_bottle_state: new_bottle_state, remaining_thirst: remaining_thirst}

function fill_bottle_with_water (bottle_fullness, bottle_size, water_purchased){
    let new_bottle_state_to_fill = 0;
    let water_left_over= 0;    

    if (bottle_fullness == bottle_size && water_purchased >= 0) {
        water_left_over = water_purchased;
    } else if (bottle_fullness < bottle_size && water_purchased > (bottle_size - bottle_fullness)) {
        water_left_over = water_purchased - (bottle_size - bottle_fullness);
    } else if (bottle_fullness < bottle_size && water_purchased <= (bottle_size - bottle_fullness)) {
        new_bottle_state_to_fill = bottle_size - (bottle_fullness + water_purchased);
    } else {
        console.error("unrecognized condition." + "bottle_fullness: " + bottle_fullness + ";bottle_size: " +
        bottle_size + ";water_purchased: " + water_purchased);
        return undefined;
    }
    return {new_bottle_state_to_fill, water_left_over};
};

console.log(fill_bottle_with_water(200, 600, 100))
console.log(fill_bottle_with_water(400, 600, 900))
console.log(fill_bottle_with_water(600, 600, 0))
console.log(fill_bottle_with_water(600, 600, 800))
console.log(fill_bottle_with_water(600, 600, -1))


/*
fill_bottle_with_water: Function
  Args: 3
    current_fullness: number
    bottle_size: number
    water_added: number
  Return: Array size 2
    0: Number
      purpose: new tank state
    1: Number
      purpose: extra water left
  Behavior: 

// --- using these functions & state ---
//  variables declared in the global scope are modified in the global scope*/

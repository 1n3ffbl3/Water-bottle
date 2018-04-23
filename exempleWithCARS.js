let tank_state = 0;
let extra_gas = 0;
const k_p_l = 20;
const tank_size = 30;

function add_to_tank(current_fullness, tank_size, gas_purchased) {
  let new_tank_state = 0;
  let gas_left_over = 0;
  
  if (current_fullness > 0){
      new_tank_state = tank_size - current_fullness;
      gas_left_over = gas_purchased - new_tank_state;
  }else{ 
      new_tank_state = tank_size ;
      gas_left_over = gas_purchased - tank_size;
  return [new_tank_state, gas_left_over];
};

console.log(add_to_tank(25, tank_size, 60);
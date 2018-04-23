let water_bottle = {
    capacity: 1000,
    fullness: 600,
    read_water_level: function() {
      console.log(this.fullness);
    },
    drunk_from: function(thirst_score) {
      let remaining_thirst = 0;
      // update this.fullness
      return remaining_thirst;
    },
    
  }
  
  // going off the deep end:
  // if you wanted to include thirst in this program:
  // let person = {
  //   thirst: 300, 
  //   drinks_from_bottle: function(a_water_bottle) {
  //     a_water_bottle.drunk_from(300)
  //     this.thirst -= 300 (or whatever was left in the bottle)
  //   }
  // }
  // water_bottle.drink_water(person.get_thirst());
  
  // let drinking_app = {
  //   person: person,
  //   water_bottle: water_bottle,
  //   drink_from: function(a_number) {
  //     //   subtract this from bottle, add it to person
  //   }
  // }
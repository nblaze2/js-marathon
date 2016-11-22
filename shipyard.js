
function launchpad(ship, crewMembers, rocket) {
  console.log("Ground control to Major Tom. Commensing sequence engines almost on...");
  console.log("The ship's name is " + ship.name);
  ship.loadCrew(crewMembers);
  console.log("For today's flight the captain is: " + ship.captain().name + ". HIGH-FIVE for our Captain!");
  rocket.addFuel(20);
  ship.mountPropulsion(rocket);
  ship.takeoff();
}

function Ship(name) {
  this.name = name;
  this.crew = [];
  this.loadCrew = function(array) {
    for (i = 0; i < array.length; i++) {
      this.crew.push(array[i]);
      console.log("Welcome aboard crew member: " + array[i].name);
    };
  };
  this.captain = function() {
    var randomNumber = Math.floor(Math.random() * this.crew.length);
    return this.crew[randomNumber];
  };
  this.propulsion = 'null';
  this.mountPropulsion = function(rocketObject) {
    this.propulsion = rocketObject;
    console.log("The propulsion is mounted!");
  };
  this.takeoff = function() {
    rocket.fire();
  };
}

var ourShip = new Ship("Ziggy Stardust");
var crewNames = ["Huey", "Dewey", "Louie", "Uncle Scrooge", "Donald", "Launchpad McQuack", "Mrs. Beakley"];
var rocket = {
  fuel: 0,
  addFuel: function(fuelAmount) {
    this.fuel += fuelAmount;
    console.log("Current fuel level: " + this.fuel);
  },

  fire: function() {
    if (this.fuel >= 1) {
      this.fuel--;
      console.log("The engines have fired! " + this.fuel + " fuel remains." );
      console.log("KABOOOOOM!");
      return true;
    } else {
      console.log("The engines failed to fire. Takeoff was unsuccessful.");
      return false;
    };
  }
}
var shipNames = ["The Quinjet", "The Jolly Roger", "X-71 Blackbird", "Milenium Falcon", "USS Enterprise"];
var fleet = {
  name: "The sweet fleet",
  ships: [],
  build: function(shipNames) {
    this.ships.push(ourShip);
    for (i = 0; i < shipNames.length; i++) {
      this.ships.push(new Ship(shipNames[i]));
      console.log("Welcome to the fleet: " + this.ships[i].name);
    };
  }
}

function CrewMember(name) {
  this.name = name;
  this.trained = false;
}

function trainCrew(array){
  var crewMembers = []
  array.forEach(function(element) {
    crewMembers.push(new CrewMember(element));
    crewMembers[crewMembers.length - 1].trained = true;
  });
  return crewMembers;
}

launchpad(ourShip, trainCrew(crewNames), rocket);
fleet.build(shipNames);

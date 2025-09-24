 function scuberGreetingForFeet(feet) {
  // This function now takes 'feet' as a parameter to be tested with different values.
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (feet > 400 && feet <= 2000) {
    return 'That will be twenty bucks.';
  } else if (feet > 2000 && feet <= 2500) {
    return 'I will gladly take your thirty bucks.'; 
  } else {
    // This 'else' statement handles all other cases, including distances over 2500 feet,
    // which the tests require to return 'No can do.'
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  // This function now takes 'city' as a parameter.
  // The ternary operator checks the condition and returns the correct string.
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  // This function uses a switch statement as required.
  // It takes 'tip' as a parameter and returns a different string for each case.
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      // The default case handles any other tip value.
      return 'Bye.';
  }
}

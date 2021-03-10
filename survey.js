const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  
  rl.question('What\'s an activity you like doing? ', (activity) => {

    rl.question('What do you listen to while doing that? ', (music) => {

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {

        rl.question('What\'s your favourite thing to eat for that meal? ', (faveFood) => {

          rl.question('Which sport is your absolute favourite? ', (sportBall) => {

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (superpower) => {

               console.log(`${name}\'s favourite activity is ${activity}, which they do while jamming out to ${music}. They love ${meal}, especially when ${faveFood} is on the menu. If you can't find them playing or watching ${sportBall}, you might be lucky enough to catch them ${superpower}!`);
               rl.close();
            });
          });
        });
      });
    });
  });
});
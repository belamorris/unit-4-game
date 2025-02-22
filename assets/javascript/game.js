$(document).ready(function() {
    // establish var values
    var yourCharacter = false;
      yourEnemies = false;
      yourOpponent = false;
      playersArray = [];
      enemyDefeatedCount = 0;

      //audio variable

      audioScum = new Audio('assets/images/04 Johnny Was a Soldier.m4a')
      audioElder = new Audio('assets/images/02 Sons of Northern Darkness.m4a')
      audioLilBarry = new Audio('assets/images/03 Harder Than You Think.m4a')
      audioLarry = new Audio('assets/images/03 Bennie and the Jets.m4a')
      audioLoss = new Audio('assets/images/02 Im a Loser.m4a')
      // creating characters and stats 
      var firstPlayer = {
        name: 'Scum',
        healthPoints: 130,
        attackPower: Math.floor((Math.random() * 10) +10),
        counterAttackPower: Math.floor((Math.random() * 20) +10),
        numberOfAttacks: 1
      }
    
      var secondPlayer = {
        name: 'Elder',
        healthPoints: 160,
        attackPower: Math.floor((Math.random() * 10) +5),
        counterAttackPower: Math.floor((Math.random() * 15) +5),
        numberOfAttacks: 1
      }
    
      var thirdPlayer = {
        name: 'Lil Barry',
        healthPoints: 90,
        attackPower: Math.floor((Math.random() * 10) + 5),
        counterAttackPower: Math.floor((Math.random() * 10) +20),
        numberOfAttacks: 1
      }
    
      var fourthPlayer = {
        name: 'Larry',
        healthPoints: 100,
        attackPower: Math.floor((Math.random() * 10) + 10),
        counterAttackPower: Math.floor((Math.random() * 10) + 15),
        numberOfAttacks: 1
      }
    
      playersArray.push(firstPlayer);
      playersArray.push(secondPlayer);
      playersArray.push(thirdPlayer);
      playersArray.push(fourthPlayer);
    
      // Start game function
    
      function startGame() {
        yourCharacter = false;
        yourEnemies = false;
        yourOpponent = false;
      };
      // appending players as your hero, enemies and opponent
      function selectOpponents() {
        var $this = $(this);
        // selecting hero
        if (yourCharacter === false) {
          $('.player').after($this);
          yourCharacter = playersArray[$this.data('player') - 1];
          yourCharacter.element = $this;
          $this.addClass('selectedHero');
          if (yourCharacter) {
          $('.enemies').after($('.inactive .character'));
          }
        } 
        // selecting opponent
        else if (yourOpponent === false) {
          // makes it so you can't attack yourself
          if($this.hasClass('selectedHero')) {
          return;
          }
          // moves opponent to their area
          $('.opponent').after($this);
          yourOpponent = playersArray[$this.data('player') - 1];
          yourOpponent.element = $this;
          $this.addClass('selectedOpponent')
          $('#instructions').html('Keep attacking until all enemies are defeated!');
          $('.status').html('');
          $('.playerAttacks').html('');
          $('.opponentAttacks').html('');
          $('.lost').html('');
        }
      };
    
     
      // Sets up the fight between characters
    
      function fight(x, y) {
    
        // if enemy not selected 
        if (yourOpponent === false) {
          $('.status').html('<h1>' + 'Players not selected!' + '<h1>');
          return;
        }
    
        // damage logic
        var attacksIncrement = yourCharacter.numberOfAttacks++;
        var attackPowerIncrement = attacksIncrement * x.attackPower
        y.healthPoints -= attackPowerIncrement;
        y.element.find('.score').html(y.healthPoints);
    
    
        if (y.healthPoints <= 0) {
          y.element.hide();
          yourOpponent = false;
          $('.status').html('<h2>' + y.name + ' is defeated!' + '</h2>');
          enemyDefeatedCount++;
    
          // check if all enemies are defeated and the winner is scum
          if (enemyDefeatedCount === 3 && x.name === 'Scum') {
              audioScum.play();
            $('.attack').hide();
            $('.playerAttacks').hide();
            $('.opponentAttacks').hide();
            $('#instructions').html('');
            $('.fight').html('');
            $('.enemies').html('');
            $('.opponent').html('');
            $('.status').html('<h2>' + 'You defeated your enemies!' + '</h2>');
            $('.player').html('Your character is victorious!');
            $('.won').html('<h1>' + 'You won! Hit ' + '<button onClick="window.location.reload()" class="winButton">' + '<h2 class="winButton">' + 'Restart' + '</h2>' + '</button>' + ' if you want to play again!' + '</h1>');
          }
          // check if all enemies are defeated and the winner is Elder
          if(enemyDefeatedCount === 3 && x.name === 'Elder'){
            audioElder.play();
            $('.attack').hide();
            $('.playerAttacks').hide();
            $('.opponentAttacks').hide();
            $('#instructions').html('');
            $('.fight').html('');
            $('.enemies').html('');
            $('.opponent').html('');
            $('.status').html('<h2>' + 'You defeated your enemies!' + '</h2>');
            $('.player').html('Your character is victorious!');
            $('.won').html('<h1>' + 'You won! Hit ' + '<button onClick="window.location.reload()" class="winButton">' + '<h2 class="winButton">' + 'Restart' + '</h2>' + '</button>' + ' if you want to play again!' + '</h1>');
          }
             
          
              //check if all enemies are defeated and the winner is lil barry
          if(enemyDefeatedCount === 3 && x.name === 'Lil Barry'){
            audioLilBarry.play();
            $('.attack').hide();
            $('.playerAttacks').hide();
            $('.opponentAttacks').hide();
            $('#instructions').html('');
            $('.fight').html('');
            $('.enemies').html('');
            $('.opponent').html('');
            $('.status').html('<h2>' + 'You defeated your enemies!' + '</h2>');
            $('.player').html('Your character is victorious!');
            $('.won').html('<h1>' + 'You won! Hit ' + '<button onClick="window.location.reload()" class="winButton">' + '<h2 class="winButton">' + 'Restart' + '</h2>' + '</button>' + ' if you want to play again!' + '</h1>');
          }
             
             //check if all enemies are defeated and the winner is Larry
          if(enemyDefeatedCount === 3 && x.name === 'Larry'){
            audioLarry.play();
            $('.attack').hide();
            $('.playerAttacks').hide();
            $('.opponentAttacks').hide();
            $('#instructions').html('');
            $('.fight').html('');
            $('.enemies').html('');
            $('.opponent').html('');
            $('.status').html('<h2>' + 'You defeated your enemies!' + '</h2>');
            $('.player').html('Your character is victorious!');
            $('.won').html('<h1>' + 'You won! Hit ' + '<button onClick="window.location.reload()" class="winButton">' + '<h2 class="winButton">' + 'Restart' + '</h2>' + '</button>' + ' if you want to play again!' + '</h1>');
          }
             
          
    
        } 
        else  {
          x.healthPoints -= y.counterAttackPower;
          x.element.find('.score').html(x.healthPoints);
        }
        if (enemyDefeatedCount === 2) {
            $('.enemies').html('');
          }
        // Determines losing sequence
        if (x.healthPoints <= 0) {
          x.element.hide();
          audioLoss.play()
           $('.attack').hide();
           $('.playerAttacks').hide();
          $('.opponentAttacks').hide();
          $('#instructions').html('');
          $('.fight').html('');
          if (enemyDefeatedCount === 1) {
            $('.enemies').html('Your enemies have defeated you!');
          }
          if (enemyDefeatedCount === 0) {
            $('.enemies').html('Your enemies have defeated you!');
          }
          if (enemyDefeatedCount === 2) {
            $('.enemies').html('');
          }
          $('.player').html('Your character has been defeated!');
          $('.opponent').html('Your opponent is victorious!');
          $('.lost').html('<h1>' + 'You lost, hit ' + '<button onClick="window.location.reload()" class="winButton">' + '<h2 class="winButton">' + 'Restart' + '</h2>' + '</button>' + ' to try again!' + '</h1>');
        }
        // explains attack sequence
        $('.playerAttacks').html('You attacked ' + y.name + ' for ' + attackPowerIncrement + ' damage. Your strength grows with every attack!');
        $('.opponentAttacks').html(y.name + ' attacked you for ' + y.counterAttackPower + ' damage.');
      };
    
      // setting function names
      $('.character').on('click', selectOpponents);
      $('.attack').on('click', function() {
        fight(yourCharacter, yourOpponent);
       
      });
    });
    
    
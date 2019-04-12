$(() => {
  let turn = 'O';
  let turns = 1;
  let wonGame = false;
  const $reset = $('.reset');
  const $openRules = $('.openRules');
  const $myModal = $('.myModal');
  const $close = $('.close');
  const $goAgain = $('.goAgain');
  const $pWin = $('.win');
  const $defText = $('.default');
  const clickSound = new Audio('Click.mp3');
  // === click sound courtesy of SoundBible.com === //
  $reset.on('click', () => {
    clickSound.play();
    resetGame();
  })
  $openRules.on('click', () => {
    clickSound.play();
    $myModal.css('display', 'block');
  })
  $close.on('click', () => {
    clickSound.play();
    $myModal.fadeOut();
    resetTextbox();
    if(wonGame === true) {
      resetGame();
    }
  })
  const resetGame = () => {
    turn = 'O';
    turns = 1;
    wonGame = false;
    $defText.show();
    $pWin.hide();
    $('.container').empty();
    makeTiles();
  }
  const makeTiles = () => {
    for(i = 0; i < 9; i++) {
      $tile = $('<div>').addClass('tile').prop('clicked', 'false');
      $('.container').append($tile);
      $tile.fadeOut().fadeIn(1000);
    }
    $('.tile').on('click', (event) => {
      clickSound.play();
      const $thisTile = $(event.currentTarget);
      if($thisTile.prop('clicked') === 'false') {
        $thisTile.css({'background-color': 'black', 'color': 'white', 'border': '2px solid yellow'});
        if(turn === 'O') {
          $thisTile.text('O');
          $thisTile.prop('clicked', 'true');
          turn = 'X';
          turns++;
        } else {
          $thisTile.text('X');
          $thisTile.prop('clicked', 'true');
          turn = 'O';
          turns++;
        }
      } else {
        goAgain();
      }
      if(turns >= 6) {
        checkWin();
      }
    });
  }
  const goAgain = () => {
    $defText.hide();
    $goAgain.fadeIn();
    $myModal.fadeIn();
  }
  const resetTextbox = () => {
    $goAgain.hide();
    $defText.fadeIn(2000);
  }
  const checkWin = () => {
    const one = $('.tile').eq(0).text();
    const two = $('.tile').eq(1).text();
    const three = $('.tile').eq(2).text();
    const four = $('.tile').eq(3).text();
    const five = $('.tile').eq(4).text();
    const six = $('.tile').eq(5).text();
    const seven = $('.tile').eq(6).text();
    const eight = $('.tile').eq(7).text();
    const nine = $('.tile').eq(8).text();
    if((one === 'O' && two === 'O' && three === 'O') ||
    (four === 'O' && five === 'O' && six === 'O') ||
    (seven === 'O' && eight === 'O' && nine === 'O') ||
    (one === 'O' && four === 'O' && seven === 'O') ||
    (two === 'O' && five === 'O' && eight === 'O') ||
    (three === 'O' && six === 'O' && nine === 'O') ||
    (one === 'O' && five === 'O' && nine === 'O') ||
    (three === 'O' && five === 'O' && seven === 'O') ||
    (one === 'X' && two === 'X' && three === 'X') ||
    (four === 'X' && five === 'X' && six === 'X') ||
    (seven === 'X' && eight === 'X' && nine === 'X') ||
    (one === 'X' && four === 'X' && seven === 'X') ||
    (two === 'X' && five === 'X' && eight === 'X') ||
    (three === 'X' && six === 'X' && nine === 'X') ||
    (one === 'X' && five === 'X' && nine === 'X') ||
    (three === 'X' && five === 'X' && seven === 'X')) {
      winGame();
    } else if (turns === 10) {
      alert('No one wins!!! Cats game!!!');
      resetGame();
    }
  }
  const winGame = () => {
    $defText.hide();
    $pWin.show();
    $myModal.fadeIn();
    wonGame = true;
  }
  resetGame();
});

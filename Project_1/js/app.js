$(() => {
  $.ajax({
    url:'https://official-joke-api.appspot.com/random_ten'
  }).then(
    (data)=>{
      for(i = 0; i < data.length; i++) {
        const $div = $('<div>').addClass('joke');
        const $question = $('<h2>').addClass('question').text(data[i].setup);
        const $answerBtn = $('<button>').addClass('answerBtn').text('Answer');
        const $answer = $('<h3>').addClass('answer').text(data[i].punchline);
        $div.append($question);
        $div.append($answerBtn);
        $div.append($answer);
        $('.carousel').append($div);
      }
    },
    ()=>{
      console.log('request not found');
    }
  )
  let currentJoke = 0;
  const numOfJokes = 9;
  $('.next').on('click', () => {
    $('.joke').eq(currentJoke).css('display', 'none');
    if(currentJoke < numOfJokes) {
      currentJoke++;
    } else {
      currentJoke = 0;
    }
    $('.joke').eq(currentJoke).css('display', 'block');
  })
  $('.previous').on('click', () => {
    $('.joke').eq(currentJoke).css('display', 'none');
    if(currentJoke > 0) {
      currentJoke--;
    } else {
      currentJoke = numOfJokes;
    }
    $('.joke').eq(currentJoke).css('display', 'block');
  })
})

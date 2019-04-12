$(() => {
  $.ajax({
    url:'https://official-joke-api.appspot.com/random_ten'
  }).then(
    (data)=>{
      console.log(data);
    },
    ()=>{
      console.log('request not found');
    }
  )
})

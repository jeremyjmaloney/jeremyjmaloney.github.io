$(() => {
  const $h1 = $('<h1>').text('Jeremy J Maloney');
  setTimout( () => {$('body').append($h1)}, 2000)
})

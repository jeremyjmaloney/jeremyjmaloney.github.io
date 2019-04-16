$(()=> {
  $('.submit').on('click', (event) => {
    $('.week').empty();
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let $dotw = new Date().getDay();
    let $myLoc = $('.location').val();
    $.ajax({
      url:`https://cors.io/?https://www.metaweather.com/api/location/search/?query=${$myLoc}`
    }).then(
      (data)=>{
        let parsedData = JSON.parse(data);
        let woeidNumber = parsedData[0].woeid;
        console.log(woeidNumber);
        $.ajax({
          url:`https://cors.io/?https://www.metaweather.com/api/location/${woeidNumber}`
        }).then(
          (data)=>{
            let parsedData = JSON.parse(data);
            // console.log(parsedData.consolidated_weather[0].applicable_date);
            let days = parsedData.consolidated_weather;
            for(let i = 0; i < days.length; i++) {
              let $weatherDiv = $('<div>');
              let $date = days[i].applicable_date;
              let $photoCode = days[i].weather_state_abbr;
              let $photo = $('<img>').attr('src', `https://www.metaweather.com/static/img/weather/png/64/${$photoCode}.png`).addClass('icon');
              let $curTemp = Math.round(((days[i].the_temp * 9/5) + 32));
              $weatherDiv.append($dotw).text(weekday[$dotw]);
              $weatherDiv.append($date);
              $weatherDiv.append($photo);
              $weatherDiv.append($curTemp);
              $('.week').append($weatherDiv);
              $dotw++;
            }
          }
        )
      },
      ()=>{
        console.log('request not found');
      }
    )
  })
})

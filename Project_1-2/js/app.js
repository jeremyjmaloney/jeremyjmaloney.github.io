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
        let cityName = parsedData[0].title;
        $.ajax({
          url:`https://cors.io/?https://www.metaweather.com/api/location/${woeidNumber}`
        }).then(
          (data)=>{
            let parsedData = JSON.parse(data);
            let days = parsedData.consolidated_weather;
            const $cityHeader = $('<h2>').text(`${cityName} Weather`);
            $('.week').append($cityHeader);
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
              if($dotw < 6) {
                $dotw++;
              } else {
                $dotw = 0;
              }
            }
            $('.location').val('');
          }
        )
      },
      ()=>{
        console.log('request not found');
      }
    )
  })
})

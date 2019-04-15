$(()=> {
  $('.submit').on('click', (event) => {
    let $myLoc = $('.location').val();
    // console.log($myLoc);
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
            for(let i = 0; i < days; i++) {
              
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

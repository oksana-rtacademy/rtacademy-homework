let cityName = "нью-йорК";
let cityNameFirstLetter, cityNameTailLowerCase, result;


for( let i = 0; i < cityName.length; i++ )
{
    cityNameFirstLetter = cityName.substring( 0, 1 ).toUpperCase();
    cityNameTailLowerCase = cityName.substring( 1 ).toLowerCase();
    if( cityName[i] === '-')
    {
        let next = cityName[i]+1;
        let qwe = next.substring( 0, 1 ).toUpperCase();
    }

    result =  cityNameFirstLetter + cityNameTailLowerCase;
}



console.log(result);


// console.log( capitalize( "льВІВ" ) );
// console.log( capitalize( "нью-йорК" ) );
// console.log( capitalize( "ріО-ДЕ-жаНейро" ) );
// console.log( capitalize( "фраНкфурт-нА-маЙні" ) );
// console.log( capitalize( "сеН-сатюрНен-лЕз-аПт" ) );

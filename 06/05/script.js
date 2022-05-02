function capitalize( cityName )
{
    if( typeof cityName === 'string' )
    {
        let lower = cityName.toLowerCase();
        let first = lower[ 0 ].toUpperCase();

        return first + lower.substring( 1 );
    }
    else if( typeof cityName === 'object' )
    {
        let cityArray = [];
        let result, i;

        for( i = 0; i < cityName.length; i++ )
        {
            let lower = cityName[ i ].toLowerCase();
            let first = lower[ 0 ].toUpperCase();
            result = first + lower.substring( 1 );
            cityArray.push( result );
        }

        return cityArray;
    }
    else if( typeof cityName === 'number' )
    {
        let lower = cityName.toString().toLowerCase();
        let first = lower[ 0 ].toUpperCase();
        first + lower.substring( 1 );

        return first + lower.substring( 1 );
    }
    else
    {
        console.log( "Введіть щось нормальне!" );
    }
}

let cityNameCapitalized = capitalize( [ "лЬвів", "одеСА", "хАРКіВ", "стОКГольМ" ] );
// ще варіанти: ["лЬвів", "одеСА", "хАРКіВ", "стОКГольМ"]
console.log( cityNameCapitalized );
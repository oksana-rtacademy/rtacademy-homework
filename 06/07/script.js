function capitalize( cityName )
{
    if( typeof cityName === 'string' )
    {
        const cityNameFirstLetter = cityName.substring( 0, 1 ).toUpperCase();
        const cityNameTailLowerCase = cityName.substring( 1 ).toLowerCase();

        return cityNameFirstLetter + cityNameTailLowerCase;
    }
    else if( typeof cityName === 'object' && cityName !== null )
    {
        let cityArray = [];

        const cityNameArray = Object.values(cityName);

        if( cityNameArray.length )
        {
            for( let i = 0; i < cityNameArray.length; i++ )
            {
                cityArray.push( capitalize( cityNameArray[ i ] ) );
            }
        }

        return cityArray;
    }

    return "";
}

let cityNameCapitalized = capitalize( ["лЬвів", [ [ "одеСА", [ [ "хАРКіВ" ] ], "стОКГольМ" ] ]] );
// ще варіанти: ["лЬвів", "одеСА", "хАРКіВ", "стОКГольМ"]
// [ "привіт", [ [ "cвіт" ] ] ]
// console.log( capitalize(["лЬвів", [ [ "одеСА", [ [ "хАРКіВ" ] ], "стОКГольМ" ] ]]));
console.log( cityNameCapitalized );
console.log( capitalize( "льВІВ" ) );
console.log( capitalize( 123 ) );
console.log( capitalize( false ) );
console.log( capitalize( null ) );
console.log( capitalize( undefined ) );
console.log( capitalize( 123n ) );
console.log( capitalize( { "name": "льВІВ", "names": [ [ "одеСА", [ [ "хАРКіВ" ] ], "стОКГольМ" ] ] } ) );

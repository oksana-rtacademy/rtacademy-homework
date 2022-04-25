// 1й варіант
let cityName = 'одеСА';
// ще варіанти: "лЬвів", "одеСА", "хАРКіВ"

let lower = cityName.toLowerCase();
let first = lower[ 0 ].toUpperCase();
let cityNameCapitalized = first + lower.substring( 1 );

console.log( cityNameCapitalized );

// 2й варіант
let cityName1 = 'хАРКіВ';
// ще варіанти: "лЬвів", "одеСА", "хАРКіВ"

let up = cityName1[ 0 ].toUpperCase();
let city = cityName1.toLowerCase().substring( 1 );
let cityNameCapitalized1 = up + city;

console.log( cityNameCapitalized1 );
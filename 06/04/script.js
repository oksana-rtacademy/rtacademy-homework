// оригінал
let age = 15,
    withParents = true;

let accessAllowed = ( age > 18 ) ? 'Yes' : ( withParents ? 'Yes' : 'No' );
console.info( accessAllowed );


// 1й варіант
let accessAllowed1;
let age1 = 15;
let withParents1 = true;

if( age1 < 18 && withParents1 === false )
{
    accessAllowed1 = 'No';
}
else
{
    accessAllowed1 = 'Yes';
}

console.log( 'accessAllowed1 = ' + accessAllowed1 );


// 2й варіант
let age2 = 15,
    withParents2 = true,
    accessAllowed2 = 'No';

if( age2 > 18 || withParents2 )
{
    accessAllowed2 = 'Yes';
}

console.log( 'accessAllowed2 = ' + accessAllowed2 );

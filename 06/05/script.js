// for
console.log( "for: ");

for( let i = 1; i <= 32; i++ )
{
    if( i % 2 === 0 )
    {
        if( i % 4 === 0 )
        {
            console.log( i + "*" );
        }
        else if( i % 10 === 0 )
        {
            console.log( i + "^" );
        }
        else
        {
            console.log( i );
        }
    }
}

// while
console.log( "while: ");

let a = 0;
while( a <= 32 )
{
    if( a % 2 === 0 )
    {
        if( a % 4 === 0 )
        {
            console.log( a + "*" );
        }
        else if( a % 10 === 0 )
        {
            console.log( a + "^" );
        }
        else
        {
            console.log( a );
        }
    }
    a++;
}
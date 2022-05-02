let age = 21;
let withParents = false;

//let accessAllowed = ( age > 18 ) ? 'Yes1' : ( withParents ? 'Yes2' : 'No' );

// console.info( accessAllowed );

if( age > 18 )
{
    console.log( 'Yes1' );
}
else
{
    if( withParents )
    {
        console.log( 'Yes2' );
    }
    else
    {
        console.log( 'No' );
    }
}

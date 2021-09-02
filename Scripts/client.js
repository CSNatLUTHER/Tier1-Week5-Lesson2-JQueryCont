$( document ).ready( onReady );

function onReady (){
    console.log( `JQuery is ready!`)
    // click event for a button that exists on scren. 
    $( '#newHotDogButton').on( 'click', newHotDog )
} // end onReady

function newHotDog(){
    console.log( 'in newHotDog')
};
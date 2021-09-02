$( document ).ready( onReady );

function onReady (){
    console.log( `JQuery is ready!`)
    // click event for a button that exists on scren. 
    $( '#newHotDogButton').on( 'click', newHotDog )
    // click event for proceedurally/dynamically created button
    $( '#mainDiv').on('click', '.fadeButton', fade )
} // end onReady

function newHotDog(){
    console.log( 'in newHotDog')
    // append a div to DOM with a red back
    // target the element into which we want to append
    let el = $( '#mainDiv')
    // empty element?
        // el.empty();
    // append some text to the element
    el.append('<div class="yellow" ><h3> I am appendage!</h3><button class="fadeButton">Fade</buton></div>');
};

function fade(){
    console.log( 'In fade function')
    // target this button's parent
    // fade out button's partent div
}
//When the user clicks the buttons that has the text "Change Heading" the text of the <h1> element changes to read "I own the DOM"

$(function () {
//
// document.getElementsByTagName("button")[0].addEventListener('click', function(e){
//     document.getElementsByTagName("h1")[0].innerHTML = "I pwn the DOM";
// });
    ///jquery solution below javascript vanilla above///
$("#changeBtn").on('click', function(){
$("h1").text("I pwn the Dom");
    });

// Every time the user enters a character in the input with id "source", that character appears in the <p> element with the id "output"

 $("#source").on('keyup', function(){
     $("#output").text($("#source").val()); //$("#source").val()) to get the user inputs from the text they input
 });
/////!!!!!!!!!!pull from javier and study!!

//When the mouse enter the h2 with the text "lorem Generator", A paragraph contain lorem appears in the div with the id of loremParagraphs
 const lorem = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur consequatur dicta error expedita illum ipsum quas temporibus. Accusamus adipisci animi culpa deserunt excepturi inventore odit optio possimus sunt voluptate?</p>";

$("#loremParagraph h2").mouseover('hover', function(){
    $("#loremParagraph").append(lorem);
});

//When the user clicks on the "Hot Pink It"  button, all the text in the div with the id of loremParagraphs becomes hotpink if it's black , or black if its hotpink.
$("#hotPinkIt").on('click', function(){
    $("#loremParagraph").toggleClass('hotpink');
});

// Bonus challenge: when the user clicks on the "Pink Blinky" button, all the text in the div with the id of loremParagraphs alternates between black and hotpink once every three seconds.
$("#blinkPink").on('click', function(){
    setInterval(function() {
    $("#loremParagraph").toggleClass('hotpink');
}, 3000);
});




})
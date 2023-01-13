$('#box').css({
    width: "100px",
    height: "30px",
    border: "2px solid black",
    borderRadius: "50px",
    position: "relative",
    left: '50%',
    backgroundColor : "white"


})

$("#circle").css({
   // position: "absolute",

    width: '30px',
    height: "28px",
    border: 'inherit',
    borderRadius: 'inherit',
    backgroundColor: "black",

})

$('h1').css({
    position: 'relative',
    left: '30%',
    fontSize: '5rem',

})

var circle = $('#circle')
var toggled = false;

$("#box").on('click', function () {

    



    if (!toggled) {
        circle.css("marginLeft", "66px")
        toggled = true;
        $("h1").css("color","white");
        $("body").css("backgroundColor", "black");
    } else {
        circle.css("marginLeft", "1px")

        toggled = false;
        $("h1").css("color","black");
        $("body").css("backgroundColor", "white");

    }





})
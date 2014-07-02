colorRandom = ~~(Math.random()*18);
function changeColor () {
    $('body').removeClass( 'color' + colorRandom  % 18 );
    colorRandom++;
    $('body').addClass( 'color' + colorRandom % 18 );
    setTimeout( changeColor, 3000 );
};
$(document).ready(function(){
    changeColor();
});

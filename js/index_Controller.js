var colors = ["red","green","blue","yellow","pink","violet"];
changeColor();
setInterval(changeColor, 500);
function changeColor() {
    var last = colors.pop();
    colors.unshift(last);

    for (var i in colors){
        $($('.car')[i]).css('background-color',colors[i]);
    }
}
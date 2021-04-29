$(document).ready(function ()
{
    $("#computeAnimate").hover(
        function()
        {
            $(this).attr("src", "./imgMainService/computador.gif");
        },
        function()
        {
            $(this).attr("src", "./imgMainService/computadores.jpg");
        });
    
    $("#notebookAnimate").hover(
        function()
        {
            $(this).attr("src", "./imgMainService/not.gif");
        },
        function()
        {
            $(this).attr("src", "./imgMainService/not.jpg");
        });

    $("#celularAnimate").hover(
        function()
        {
            $(this).attr("src", "./imgMainService/celular.gif");
        },
        function()
        {
            $(this).attr("src", "./imgMainService/celular.jpg");
        });
});
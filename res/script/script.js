let inmenu = false;
$('#menu-btn').on('click',()=>{
    if(!inmenu){
        $('#menu-bar').css('visibility','visible');
        $('#menu-btn').css('transform','rotate(180deg)');
        inmenu = true;
        }else{
            $('#menu-bar').css('visibility','hidden');
            $('#menu-btn').css('transform','rotate(0deg)');
            inmenu = false;}
});

$('#scroller').on('click',()=>{
    scroll(0,700);
});

$('#img-logo').on('click',()=>{
    window.location.assign('/');
});
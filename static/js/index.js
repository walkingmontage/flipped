var metro = {
    render: function(delay){
        var pos = metro.getPos($(window).height() - 30, 300),
            size = pos.size,
            row = pos.row;

        $('.metro li').each(function(i, v){
            var x = Math.floor(i/row),
                y = i%row;
                if(delay){
                    metro.show(v, size, x, y);
                }else{
                    console.log(i)
                    setTimeout(function(){
                         metro.show(v, size, x, y);
                    }, 100 * i);    
                }
        });
    },

    getPos: function(total, height){
        var row = Math.round(total / height);
        return {
            size: Math.floor(total / row),
            row: row
        }
    },

    show: function(obj, size, x, y){
        $(obj).css({
            width: size +'px', 
            height: size + 'px', 
            transform: 'translate3d('+ (parseInt(x*size)+x) +'px, '+ (parseInt(y*size)+y) +'px, 0)',
            opacity: '1'
        });   
    }

}
$(function(){
    $('.content').css({width: $(window).width() +'px'});

    //可用高度
    metro.render();

    $(window).on('resize', function(){
        metro.render(true);
    });
    
});
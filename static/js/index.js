var metro = {
    render: function(delay){
        var pos = this.getPos($(window).height() - 30, 300),
            size = pos.size,

            //显示的行数
            row = pos.row;

        $('.metro li').each(function(i, v){
            var x = Math.floor(i /row),
                y = i % row;

            if(delay){
                metro.show(v, size, x, y);
            }else{
                setTimeout(function(){
                     metro.show(v, size, x, y);
                }, 100 * i);    
            }
        });
    },

    getPos: function(total, height){
        // 以height为中间值 四舍五入 得到显示的行数 图片宽高等比缩放
        
        var row = Math.round(total / height);
        return {
            size: Math.floor(total / row),
            row: row
        }
    },

    show: function(obj, size, x, y){
        //x y 为matrix的坐标
        console.log(x, y)
        obj = $(obj);

        var width = size * 2 + 1;

        obj.css({
            width: width +'px', 
            height: size + 'px', 
            transform: 'translate3d('+ (parseInt(x*width)+x) +'px, '+ (parseInt(y*size)+y) +'px, 0)',
            opacity: '1'
        });   
    }

}
$(function(){
    //$('.content').css({width: $(window).width() +'px'});

    //可用高度
    metro.render();

    $(window).on('resize', function(){
        metro.render(true);
    });
    
});
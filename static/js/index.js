var metro = {
    place: [],
    count: 0,
    render: function(delay){
        var pos = metro.getPos($(window).height() - 30, 300),
            size = pos.size,
            row = pos.row;

        $('.metro li').each(function(i, v){
            var x = Math.floor(metro.count /row),
                y = metro.count % row;

            if(delay){
                metro.show(v, size, x, y);
            }else{
                setTimeout(function(){
                     metro.show(v, size, x, y);
                }, 100 * i);    
            }

            metro.count ++;
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

        $.each(metro.place, function(i, v){
            if(v[0] == x && v[1] == y){
                y = y + 1;
                return false;
            }
        });

        //如果是占两列的大块 记录下多占的坐标 循环的时候跳过此处
        var type = obj.data('type'),
            width = size;
        if(type == 'big'){
            metro.place.push([x+1, y]);

            // 宽度增加
            width = size * 2 + 1;
            metro.count ++;
        }

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
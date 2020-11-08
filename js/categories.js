// https://api-hmugo-web.itheima.net/api/public/v1/categories
function shopCategories() {
    http.ajax({
        type: 'get',
        url: '/categories',
        success: function (res) {
            console.log(res);
            const gogogo = template('list_item', res);
            // console.log(gogogo);
            $('.list_left').html(gogogo);


            // 侧边栏点击事件
            $('.list_left').on('click', '.list_item', function () {
                console.log(this);
                $(this).addClass('current').siblings().removeClass('current');
                // 获取序号相应的数据
                const rend = res.message[$(this).index()];
                console.log(rend);
                const gogogo = template('list_product', rend);
                $('.list_right').html(gogogo);
            })



            //载入页面的时候自动加载第一个
            $('.list_item')[0].click();

        }
    })
}
shopCategories();


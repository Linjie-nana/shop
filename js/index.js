
function swiperdataLoad() {
    http.ajax({
        type: 'get',
        url: '/home/swiperdata',
        success: function (res) {
            console.log(res);
            const renderResult = template('swiperdataLo', res);
            console.log(renderResult)
            $('.toSwiperdata').html(renderResult);


            //修复插件bug，要线静态渲染然后再进行初始化
            var mySwiper = new Swiper('.swiper-container', {
                freeMode: false,
                autoplay: true,
                loop: true,
                effect: 'fade',
                fade: {
                    crossFade: false,
                }
            })
        }
    })
}

swiperdataLoad()

// https://api-hmugo-web.itheima.net/api/public/v1/home/catitems
function catitems() {
    http.ajax({
        type: 'get',
        url: '/home/catitems',
        success: function (res) {
            console.log(res);
            const renderResult = template('catitemsLo', res);
            console.log(renderResult)
            $('.catitems').html(renderResult);
            //  转跳
            $('.catitems a')[0].href = './categories.html'
        }

    })
}
catitems()

https://api-hmugo-web.itheima.net/api/public/v1/home/floordata
function floordata() {
    http.ajax({
        type: 'get',
        url: '/home/floordata',
        success: function (res) {
            console.log(res.message);
            const renderResult = template('floor', res);
            console.log(renderResult)
            $('.floor').html(renderResult);
        }
    })
}
floordata()

function search() {

    window.location.href = './search.html';

}

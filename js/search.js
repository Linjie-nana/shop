function search() {
    const search_input = $('.header_search input').val();
    console.log(search_input);
    http.ajax({
        type: 'get',
        url: '/goods/search',
        data: {
            query: search_input
        },
        success: function (res) {
            console.log(res);
            const renderResult = template('letgo', res.message);
            console.log(renderResult)
            $('.list').html(renderResult);
        }
    })
}
search();

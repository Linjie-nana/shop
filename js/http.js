const http = {}

http.ajax = function ({ type, url, success, data }) {
    const baseHttp = 'https://api-hmugo-web.itheima.net/api/public/v1';
    //将ajax里面的参数调取出来，这样就可以更加方便更改里面的内容
    const requirData = {
        type: type,
        url: baseHttp + url,
        success: success,
        data: data,
    }

    //如果进来的data是formdata类型，则修改相关数据要求
    // console.log(data instanceof FormData);
    if (data instanceof FormData) {
        requirData.contentType = false;
        requirData.processData = false;
    }
    $.ajax(requirData);
}
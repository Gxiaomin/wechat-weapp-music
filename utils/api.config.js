const BASE_URL = "https://route.showapi.com";

const header = {  
    'Accept': 'application/json',  
    'content-type': 'application/json',  
    'Authorization': null,  
  } 

var requestHandler = {
    params: {},
    success: function(res) {
        // success
    },
    fail: function() {
        // fail
    },
}

//GET请求
function GET(requestHandler) {
    request('GET', requestHandler)
}
//POST请求
function POST(requestHandler) {
    request('POST', requestHandler)
}

function request(method, requestHandler) {
    if (requestHandler.params.loading == true) {  
        wx.showToast({  
            title: '数据加载中',  
            icon: 'loading'  
        })  
    }  

    if(method === 'GET') {
        requestHandler.params = requestHandler.params || {};
        let show_user = {
            showapi_appid: '67961',
            showapi_sign: 'f3088ded57d14169b4083a8cd2d829a3'
        }

        requestHandler.params.showapi_appid = show_user.showapi_appid;
        requestHandler.params.showapi_sign = show_user.showapi_sign;
    }

    if(method === 'POST') {
        requestHandler.params = processParam(requestHandler.params);
        let show_user = {
            showapi_appid: '67961',
            showapi_sign: 'f3088ded57d14169b4083a8cd2d829a3'
        }
        requestHandler.params.showapi_appid = show_user.showapi_appid;
        requestHandler.params.showapi_sign = show_user.showapi_sign;
    }

    wx.request({
      url: BASE_URL + requestHandler.params.url,
      data: requestHandler.params,
      method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: header, // 设置请求的 header
      success: function(res){
        if (requestHandler.params.loading == true) {  
            wx.hideToast();//隐藏提示框  
        }  
        //注意：可以对参数解密等处理
        requestHandler.success(res)
      },
      fail: function() {
        if (requestHandler.params.loading == true) {  
            wx.hideToast();//隐藏提示框  
        }  
        requestHandler.fail()
      },
      complete: function() {
        if (requestHandler.params.loading == true) {  
            wx.hideToast();//隐藏提示框  
        }  
        // complete
      }
    })
}

module.exports = {
    GET: GET,
    POST: POST
}


//参数处理
function processParam(params) {
    if (!params) {
      return {}
    }
    Object.keys(params).forEach((key) => {
      if (params[key] !== 0 && !params[key]) delete params[key];
    });
    return params;
}



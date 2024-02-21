/* 
蒙牛兑奶
*******************************
[rewrite_local]
# > 修改返回体，使按钮变亮
^http[s]?:\/\/mp-isv\.youzanyun\.com\/point\/item\/getItemDetail url script-response-body https://raw.githubusercontent.com/conceay/self-service/main/JavaScripts/mnmilk.js 
[mitm]
hostname = mp-isv.youzanyun.com
*/
var body = $response.body;
var obj = JSON.parse(body);

obj['data']['isExchange'] = True;

mn = JSON.stringify(obj);
console.log(mn)
$done({
    mn
});

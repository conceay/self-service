let body = $response.body;
let obj = JSON.parse(body);

obj['data']['isExchange'] = true;

mn = JSON.stringify(obj);
console.log(mn);
$done({body: mn});

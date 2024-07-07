/***********************************************
> 应用名称：墨鱼自用deleteHeader脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2024-02-03
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
***********************************************/	

const version = 'V1.0.2';

// 定义一个函数来设置或更新头部字段的值
function setHeaderValue(headers, fieldName, value) {
    var lowerCaseFieldName = fieldName.toLowerCase();
    if (lowerCaseFieldName in headers) {
        headers[lowerCaseFieldName] = value;
    } else {
        headers[fieldName] = value;
    }
}

// 获取请求的头部信息
var modifiedHeaders = $request.headers;
$notify('test', '', modifiedHeaders);

// 设置或更新 "X-RevenueCat-ETag" 字段的值为一个空字符串
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

// 返回修改后的头部信息
$done({headers: modifiedHeaders});

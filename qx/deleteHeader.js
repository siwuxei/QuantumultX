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

function setHeaderValue(headers, fieldName, value) {
    var lowerCaseFieldName = fieldName.toLowerCase();
    if (lowerCaseFieldName in headers) {
        headers[lowerCaseFieldName] = value;
    } else {
        headers[fieldName] = value;
    }
}

var modifiedHeaders = $request.headers;
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];

// Array of keywords to check
var keywords = ["Fileball"];

// Check if the user-agent does not contain any of the keywords
if (!keywords.some(keyword => ua.includes(keyword))) {
    setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
    console.log("DeleteHeader Completion!");
}

$done({headers: modifiedHeaders});

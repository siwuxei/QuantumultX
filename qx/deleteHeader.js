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

[rewrite_local]
# ～ RevenueCat@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/siwuxei/QuantumultX/main/qx/revenuecat.js

// ========= 动态ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'FinancialNote': ['category'],
  'QingLong': ['Premium'],
  'CircleTime/': ['Premium'],
  'ScreenRecordCase/': ['Premium'],
  'Chronicling/': ['Premium'],
  'Yosum/': ['Premium'],
  'Currency-Converter/': ['pro'],
  'Precious/': ['Pro'],
  'Unfold/': ['PRO'],
  'mark_cup/': ['premiun'],
  'SleepMaster/': ['premium','sm_14999_lifetime'],
  'Grain/': ['gold','lifetimeMembership'],
  'AudioPlayer': ['Pro'],
  'FoJiCam/': ['ProVersionLifeTime'],
  'pdfai_app/': ['premium'],
  'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
  'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
  'Aphrodite': ['all'],
  'timetrack.io': ['atimelogger-premium-plus'],
  'LiveWallpaper': ['Pro access'],
  'SharkSMS': ['VIP','com.lixkit.diary.permanent_68'],
  '%E7%BE%8E%E5%A6%86%E6%97%A5%E5%8E%86': ['Pro access'],
  'Aula/': ['Pro access'],
  'apollo': ['all'],
  'iplayTV/': ['com.ll.btplayer.12'],
  'widget_art': ['all'],
  'OneBox': ['all'],
  'Taskbit/': ['Pro'],
  'Spark': ['premium'],
  'Pillow': ['premium'],
  '1Blocker': ['premium'],
  'VSCO': ['membership'],
  'UTC': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
  'OffScreen': ['Entitlement.Pro'],
  'ScannerPro': ['plus'],
  'Duplete/': ['Pro'],
  'Ooga/': ['Ooga'],
  'WhiteCloud': ['allaccess'],
  'HTTPBot': ['pro'],
  'audiomack': ['Premium1'],
  'server_bee': ['Pro'],
  'simple-': ['patron'],
  'streaks': ['patron'],
  'andyworks-calculator': ['patron'],
  'vibes': ['patron'],
  'CountDuck': ['premium', 'Lifetime'],
  'IPTVUltra': ['premium'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'PDF_convertor/': ['VIP', 'com.pdf.convertor.forever'],
  'ChatGPTApp': ['Advanced'],
  'APTV': ['pro'],
  'TouchRetouchBasic': ['premium'],
  'My%20Jump%20Lab': ['lifetime'],
  '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
  'Paku': ['pro'],
  'Awesome%20Habits': ['premium'],
  'Gear': ['pro', 'com.gear.app.yearly'],
  'MoneyThings': ['Premium'],
  'Anybox': ['pro'],
  'Noto': ['pro'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'WidgetSmith': ['Premium'],
  'Percento': ['premium'],
  'Planny': ['premium'],
  'CPUMonitor': ['Pro'],
  'Locket': ['Gold'],
  'My%20Tim': ['Pro'],
  'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'YzyFit/': ['pro', 'yzyfit_lft_v2'],
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
  'Fin': ['premium', 'com.circles.fin.premium.yearly'],
  'Ledger': ['Pro', 'com.lifetime.pro'],
  'One4Wall': ['lifetime', 'lifetime_key'],
  'PhotoMark/': ['Pro', 'com.photo.mark.forever'],
  'SimpleScan/': ['premium', 'com.atlantia.SimpleScan.Purchases.Lifetime'],
  'OneWidget': ['allaccess'],
  'CardPhoto': ['premium'],
  'Journal_iOS/': ['PRO'],
  'LemonKeepAccounts/': ['VIP','lm_1_1month'],
  'PDF%20Viewer': ['sub.pro'],
  'PhotoRoom': ['business'],
  'Decision': ['com.nixwang.decision.entitlements.pro'],
  'Tangerine': ['Premium'],
  'PastePal': ['premium'],
  'Fiery': ['premium'],
  'Airmail': ['Airmail Premium'],
  'Stress': ['StressWatch Pro'],
  'PinPaper': ['allaccess'],
  'Echo': ['PLUS'],
  'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
  'Overdue': ['Pro'],
  'BlackBox': ['plus','app.filmnoir.appstore.purchases.lifetime'],
  'Spektr': ['premium'],
  'MusicMate': ['premium','mm_lifetime_68_premium'],
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
  'Tasks': ['Pro'],
  'Currency': ['plus'],
  'money_manager': ['premium'],
  'fastdiet': ['premium'],
  'Blurer': ['paid_access'],
  'Everlog': ['premium'],
  'reader': ['vip2','com.valo.reader.vip2.year'],
  'GetFace': ['Pro access'],
  'intervalFlow': ['All Access','wodtimer_lf_free'],
  'Period%20Calendar': ['Premium','com.lbrc.PeriodCalendar.premium.yearly'],
  'Cookie': ['allaccess','app.ft.Bookkeeping.lifetime'],
  'ScientificCalculator': ['premium','com.simpleinnovation.calculator.ai.premium.yearly.base'],
  'MOZE': ['premium'],
  '1LemonKeepAccounts/': ['vip'],
  'To%20Me/': ['Premium'],
  '%E8%A8%80%E5%A4%96%E7%AD%86%E8%A8%98/': ['Premium'],
  'alcohol.tracker': ['pro','drinklog_lifetime'],
  'DayPoem': ['Pro Lifetime'],
  'Budget%20Flow': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  'G%20E%20I%20S%20T': ['memorado_premium'],
  'multitimer_app': ['premium','timus_lt'],
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters'],
  'tiimo': ['full_access'],
  'FaceMa/': ['Pro access'],
  'Record2Text/': ['Pro access'],
  'jinduoduo_calculator': ['jinduoduoapp','mobile_vip'],
  'Focused%20Work': ['Pro'],
  'GoToSleep': ['Pro'],
  'kegel': ['kegel_pro'],
  'Ochi': ['Pro'],
  'Pomodoro': ['Plus','com.MINE.PomodoroTimer.plus.yearly'],
  'universal/': ['Premium','remotetv.yearly.07'],
  'ShellBean/': ['pro','com.ningle.shellbean.subscription.year'],
  'AI%20Art%20Generator/': ['Unlimited Access'],
  'Email%20Me': ['premium'],
  'GoodThing/': ['pro','goodhappens_basic_year'],
  'Reels%20Editor': ['Unlimited Access'],
  'com.dison.diary': ['vip'],
  'iRead': ['vip'],
  'jizhi': ['jizhi_vip'],
  'card/': ['vip'],
  'EraseIt/': ['ProVersionLifeTime'],
  'Alpenglow': ['newPro'],
  'MindBreathYoga/': ['lifetimeusa'],
  'MetadataEditor': ['unlimited_access'],
  '%E6%9F%A5%E5%A6%86%E5%A6%86': ['Pro access'],
  '%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6': ['plus'],
  'WidgetCat': ['MiaoWidgetPro'],
  'Emphasis/': ['premium'],
  'FormScanner/': ['Pro','formscanner_lifetime'],
  'streamer/': ['Premium'],
  'NeatNook/': ['com.neatnook.pro','com.neatnook.pro.forever'],
  'Blackout/': ['premium','blackout_299_lt'],
  'Budgetify/': ['premium','budgetify_3999_lt'],
  'Dedupe/': ['Pro','com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99'],
  'Wozi': ['wozi_pro_2023']
};

// =========    固定部分  ========= // 
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);
const match = Object.keys(mapping).find(e => ua.includes(e));

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

// 设置或更新 "X-RevenueCat-ETag" 字段的值为一个空字符串
if (match) {
  setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");
}

// 返回修改后的头部信息
$done({headers: modifiedHeaders});


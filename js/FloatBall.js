/*
 * Author:      dan.wang && xiangyu.bai
 * Create date: 2016-05-24
 * Description: 悬浮窗插件,该脚本用于指游方寸H5游戏 悬浮窗功能的实现接入
 * 使用方法:
 * 1.引入js文件
 * <script src="http://r.3333.cn/a8sdk/PlugIn/FloatBall/js/FloatBall.js" type="text/javascript" ></script>
 * 2.使用以下方法初始化组件
    H5_FloatBall.showBall({
        url:   "http://www.3333.cn/",
        desc:  "指游方寸",
        title: "指游方寸-专注发行,只做精品",
        pics:  "http://r.3333.cn/3333/gw/pc/images/toplogo.png"
    });
 */

// 声明悬浮窗对象
var H5_FloatBall = new Object();

// 声明常用参数
H5_FloatBall.FloatBallHtml = "";        // 悬浮窗代码
H5_FloatBall.ShareParams = {            // 分享参数初始
    url:   "http://www.3333.cn/",
    desc:  "指游方寸",
    title: "指游方寸-专注发行,只做精品",
    pics:  "http://r.3333.cn/3333/gw/pc/images/toplogo.png"
};


/**
 * 初始化悬浮设置
 */
H5_FloatBall.init = function(){

}

/**
 * 请求函数
 * @param  String   url          请求地址
 * @param  String   params       参数
 * @param  String   callback     函数回调（暂不可用，留空）
 * @param  String   transferMode 请求方式
 * @param  String   responseType 返回类型（暂不可用，留空）
 * @param  Boolean  asyn         同步异步设置
 */
H5_FloatBall.call = function(url, params, callback, transferMode, responseType, asyn){
    var json;
    var xmlhttp;
    if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }else{// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            json = eval('('+xmlhttp.responseText+')');
        }
    }

    xmlhttp.open(transferMode, url, asyn);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(params);
    return json;
}


/**
 * 调用显示悬浮窗
 */
H5_FloatBall.showBall = function(){

}

/**
 * 到电脑玩
 */
H5_FloatBall.playToPC = function(){

}

/**
 * 分享功能
 */
H5_FloatBall.shareAPI = function(){

}

/**
 * 保存下载
 */
H5_FloatBall.downGame = function(){

}

/**
 * 退出游戏
 */
H5_FloatBall.exitGame = function(){

}

/**
 * 返回
 */
H5_FloatBall.goBack = function(){

}

/**
 * 转到指游部落
 */
H5_FloatBall.goTozybl = function(){

}

/**
 * 绑定手机
 */
H5_FloatBall.bindPhone = function(){

}

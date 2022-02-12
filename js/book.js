//映射关系
var books = {
    "level0":modules_3_1,
    "level1":modules_3_2,
    "level2":modules_4_1,
    "level3":modules_4_2
};

//页面初始化
function init() {
    initData();
    bindEvent();
}

// 初始化数据
function initData() {
    var _html = '';
    var levelIndex = getParamFromPath("level",window.location.href);
    var modules = books["level"+levelIndex];
    for(var i=0,len=modules.length;i<len;i++){
        _html += ' <div class="module_item">\n' +
            '            <div class="module_title">'+modules[i].title+'<span class="fold_btn" data-index="'+i+'"></span></div>\n' +
            '            <div class="word_list">' ;

        var wordList = modules[i].content;
        var playUrl = "http://dict.youdao.com/dictvoice?type=1&audio=";
        for(j=0,subLen=wordList.length;j<subLen;j++){
            _html += '<div class="word_item">\n' +
                '            <span>'+wordList[j].en+'</span>\n' +
                '            <span>'+wordList[j].zh+'</span>\n' +
                '            <audio controls class="audio">\n' +
                '  <source src="'+playUrl + wordList[j].en +'">\n' +
                '您的浏览器不支持 audio 元素。\n' +
                '</audio>' +
                '        </div>';
        }
        _html += '</div></div>';
    }
    $("#moduleList").html(_html);
    expandModule(0,true);
}

// 展开单元数据
function expandModule(index,expandFlag) {
    if(expandFlag){
        $(".fold_btn").eq(index).addClass("show");
        $(".word_list").eq(index).show();
    }else{
        $(".fold_btn").eq(index).removeClass("show");
        $(".word_list").eq(index).hide();
    }
}

// 事件绑定
function bindEvent() {
    //返回按钮的点击事件
    $("#back_btn").on("click",function (e) {
        // 判断是否是微信，微信不支持用此方法关闭
        if(isWeiXin()){
            WeixinJSBridge.call('closeWindow');
        }else{
            window.close();
        }

    })
    //折叠展开效果
    $(".fold_btn").on("click",function (e) {
        var index = parseInt($(e.currentTarget).data("index"));
        var $dom = $(".fold_btn").eq(index);
        if($dom.hasClass("show")){
            expandModule(index,false);
        }else{
            expandModule(index,true);
        }
    })
}
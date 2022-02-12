//页面初始化
function init() {
    initData();
    bindEvent();
}

// 初始化数据
function initData() {
    var _html = '';
    for(var i=0,len=4;i<len;i++){
        _html += '<div class="poster_item" data-index="'+i+'"><img src="./images/poster'+i+'.jpg" alt=""></div>';
    }
    $("#poster_list").html(_html);

}

// 事件绑定
function bindEvent() {
    $(".poster_item").on("click",function (e) {
        //e.currentTarget 为绑定事件的元素，e.target为触发事件的元素
        var index = parseInt($(e.currentTarget).data("index"));
        window.open("./book.html?level="+index);
    })
}
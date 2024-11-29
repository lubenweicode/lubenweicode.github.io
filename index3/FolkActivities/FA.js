// 显示或隐藏活动内容的函数
function showActivity(activityId) {
    // 隐藏所有活动
    var activities = document.querySelectorAll('.activity');
    activities.forEach(function (activity) {
        activity.style.display = 'none';
    });

    // 显示指定的活动
    var activityToShow = document.getElementById('activity' + activityId);
    if (activityToShow) {
        activityToShow.style.display = 'flex';
    }
}

// 初始加载时显示第一个活动
window.onload = function () {
    showActivity(1);
};

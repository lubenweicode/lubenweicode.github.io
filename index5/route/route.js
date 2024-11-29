// route.js 文件
document.getElementById('search-input').addEventListener('input', function () {
    const keyword = this.value.toLowerCase().trim(); // 获取搜索关键字
    const containers = document.querySelectorAll('.container .route-graph');

    if (keyword === '') {
        containers.forEach(container => {
            container.style.backgroundColor = ''; // 高亮背景
        });
    } else {
        containers.forEach(container => {
            const content = container.textContent.toLowerCase();
            if (content.includes(keyword)) {
                container.style.backgroundColor = '#ffffcc'; // 高亮背景
            } else {
                container.style.backgroundColor = ''; // 清除高亮
            }
        });
    }

});
// 当页面加载完成后，执行以下代码
window.onload = function () {
    // 获取所有的购买链接
    const purchaseLinks = document.querySelectorAll('.card a');

    // 为每个购买链接添加点击事件
    purchaseLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // 防止默认行为，即不跳转
            alert('此功能正在开发中！');  // 弹出提示框
        });
    });
};

// 搜索功能实现
function searchProducts() {
    // 获取搜索框的输入值并转小写
    let input = document.getElementById('searchInput').value.toLowerCase();

    // 获取所有的卡片元素
    let cards = document.querySelectorAll('.card');

    // 遍历每个卡片，检查其标题是否包含搜索内容
    cards.forEach(function (card) {
        let title = card.querySelector('.card-title').textContent.toLowerCase();

        // 如果标题包含搜索关键字，显示卡片，否则隐藏卡片
        if (title.includes(input)) {
            card.style.display = '';  // 显示卡片
        } else {
            card.style.display = 'none';  // 隐藏卡片
        }
    });
}

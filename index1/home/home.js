// script.js
document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".item-list li");
    const previewImg = document.getElementById("preview-img");

    // 设置初始图片
    previewImg.src = "../image/JiangmenIndex1.png";
    previewImg.style.display = "block"; // 确保图片显示

    // 图片路径数组
    const images = [
        "../image/JiangmenIndex1.png",
        "../image/KaiPingDiaoZhuang.png",
        "../image/GUlaoShuixiang.png",
        "../image/QingXingkeng.png",
        "../image/NaQingBandao.png",
        "../image/BirdHaven.png"
    ];

    let currentIndex = 0;
    let interval;

    // 启动轮播
    const startCarousel = () => {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            previewImg.src = images[currentIndex];
            previewImg.style.display = "block"; // 显示图片
        }, 3000); // 每3秒切换一张图片
    };

    // 停止轮播
    const stopCarousel = () => {
        clearInterval(interval);
    };

    // 鼠标悬停显示图片
    listItems.forEach((item, index) => {
        item.addEventListener("mouseover", () => {
            stopCarousel(); // 停止轮播
            const imgSrc = item.getAttribute("data-image");
            previewImg.src = imgSrc;
            previewImg.style.display = "block"; // 显示图片
        });

        item.addEventListener("mouseout", () => {
            startCarousel(); // 恢复轮播
        });
    });

    // 初始化轮播
    startCarousel();
});
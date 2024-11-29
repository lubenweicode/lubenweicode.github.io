class SpotGallery {
    constructor(descriptionElementId, imageElementId, titleElementId) {
        this.element = document.getElementById(descriptionElementId);
        this.imageElement = document.getElementById(imageElementId);
        this.titleElement = document.getElementById(titleElementId);
        this.currentSpotIndex = 0;
        this.spots = {};
    }

    // 设置景点列表
    setSpots(location, spotsList, images, titles) {
        this.spots[location] = { spots: spotsList, images: images, titles: titles };
        if (!this.currentLocation) {
            this.currentLocation = location;
            this.currentSpotIndex = 0;
            this.updateContent();
        }
    }

    // 更新展示内容
    updateContent() {
        if (this.element && this.spots[this.currentLocation]) {
            const spot = this.spots[this.currentLocation].spots[this.currentSpotIndex];
            const imageSrc = this.spots[this.currentLocation].images[this.currentSpotIndex];
            const title = this.spots[this.currentLocation].titles[this.currentSpotIndex];
            this.element.textContent = spot;
            this.imageElement.src = imageSrc;
            this.titleElement.textContent = title;
        }
    }

    // 切换到下一个景点
    showNextSpot() {
        if (this.spots[this.currentLocation]) {
            this.currentSpotIndex = (this.currentSpotIndex + 1) % this.spots[this.currentLocation].spots.length;
            this.updateContent();
        }
    }

    // 切换到不同的地点
    switchLocation(location) {
        this.currentLocation = location;
        this.currentSpotIndex = 0;
        this.updateContent();
    }
}

// 定义各个地点的景点描述和对应的图片列表
const kaipingSpots = [
    "自力村有15座风格各异、造型精美、内涵丰富的碉楼，是开平碉楼兴盛时期的杰出代表。自力村碉楼多建于20世纪二三十年代，是当地侨胞为保护家乡亲人的生命财产安全而兴建的。自力村碉楼将中国传统乡村建筑文化与西方建筑文化巧妙地融合在一起，罕有地体现了近代中西文化在中国乡村的广泛交流，成为中国华侨文化的纪念丰碑和独特的世界建筑艺术景观。楼内保存着完整的家具、生活设施、生产用具和日常生活用品，丰富而有趣，是当时华侨文化与生活的见证。",
    "赤坎沿潭江而建，南岸是乡村，北岸则是城市，清一色的骑楼，远比开平老街庞大的洋楼群。沿江的堤东堤西路，里面与之平行的中华路，夹在两条大路间还有一条叫“二马路”的小路，这是与江平行的三横，还有许多纵马路与它们交叉形成城区的路网。赤坎镇有一番中西合璧的古朴味道。因此有“中国第五名古镇”之称。",
];

const kaipingImages = [
    "../image/Kaipingdiaolou.jpg",
    "../image/kaipingchikanguzhen.jpg"

];

const kaipingTitle = ["开平自立村碉楼群", "开平赤坎古镇"];

const taishanSpots = [
    "那琴半岛地质海洋公园位于广东省台山市北陡镇南部海湾，这里更被称为南中国海上石林。海岸线全长6000多米，拥有600多亩独特的自然奇石林，“五湾五山”之众多景点星罗棋布。置身半岛海景，漫步3000多米环岛观光木栈道，观赏官帽石、佛脚石、千年博弈、灵兔望月、镇海神狮等鬼斧神工的奇礁怪石。",
    "台山的梅家大院位于广东省江门市台山市，是侨乡文化的代表性建筑之一。梅家大院由当地的梅氏家族于20世纪初建成，具有明显的中西合璧风格，融合了传统岭南建筑特色和西方建筑元素。梅家大院的建筑风格独特，房屋的窗户、门框、雕刻等细节处都能看到西洋风格的影响，这与当时台山大量侨民出国谋生、再归乡建造家宅的历史背景密切相关。\u00A0台山梅家大院不仅是广东侨乡建筑的代表，也是研究侨乡文化、民间生活和侨民历史的重要文物。如今，这一大院已被列为保护建筑，吸引着大量游客前来，感受独特的侨乡文化和历史氛围。",

];

const taishanImages = [
    "../image/NaQingBandao.png",
    "../image/TaishanMeijiaDayuan.jpg",
];

const taishanTitle = ["台山那琴半岛", "台山梅家大院"];

const xinghuiSpots = [
    "小鸟天堂”又名“鸟的天堂”，位于广东省江门市新会区，是一个以独特的鸟类生态风景为主题，集生态旅游、文化旅游、健康旅游、休闲旅游于一体的旅游风景区。小鸟天堂位于距广州市100公里外的江门市新会区天马村天马河的河心沙洲上，是全国最大的天然赏鸟乐园之一。",
    "广东圭峰山国家森林公园，位于广东省江门市新会区北部、圭峰山风景名胜区内，为中国大陆最南端的国家森林公园。广东圭峰山国家森林公园森林覆盖率98%，植被以针阔叶混交林和阔叶林为主，有台湾相思林、三角枫林、荷木林、按树林等。园内植物100余种，野生动物有蟒蛇、锦鸡、金丝鸟、画眉、穿山甲、金猫等。1997年12月，圭峰山风景区经中华人民共和国林业部审核批准成为国家森林公园。2002年，广东圭峰山国家森林公园被中华人民共和国国家旅游局评为“国家AAAA级风景名胜区”。"

];

const xinghuiImages = [
    "../image/Xinghuixiaoniaotiantang.jpg",  // 小鸟天堂图片
    "../image/xinghuiguifengshan.jpg"  // 圭峰山图片
];

const xinghuiTitle = ["新会小鸟天堂", "新会圭峰山"];

const enpingSpots = [
    "在中国第一个温泉之乡、中国第一个国家地热地质公园恩平市，镶嵌着一颗璀璨的温泉明珠，她令到旅游行家们都赞赏有加，让中国地矿热权威部门和专家都惊叹推崇的“温泉仙境”，江门新八景之一的大型温泉度假区——锦江温泉。",

];

const enpingImages = [
    "../image/Enpingjingjiangwenquan.jpg",  // 恩平温泉图片

];

const enpingTitle = ["恩平锦江温泉"];

const heshanSpots = [
    "古劳水乡又称围墩水乡，是位于广东省江门市鹤山市古劳镇沅江路的景点。据史载，距今700多年历史。水乡地处西江岸边，明洪武二十七年，古劳人冯八秀奉旨兴建古劳围，从此，古劳便从滩涂泽国逐渐变成美丽的岭南，“围墩”是根据地理特点命名的，意即堤围下的一个个“墩”。拥有岭南地区规模最大、分布最集中、保存最完整、极具生态意义的桑基鱼塘，围墩人家人文风貌底蕴深厚，有“水桥山院人文物”等特色鲜明的优异资源。",
    "大雁山风景区是位于广东省江门市鹤山沙泙城区北部的旅游景区，面积300公顷，主峰海拔310米。大雁山风景区，旁依广湛公路和佛开高速公路，近邻鹤山港，面临西江，因其山形似大雁展翅直扑西江俯首饮水而得名，它与南海西樵山互称“姐妹山”，山与水结合，且峰峦起伏，奇石竟秀，山林葱郁，清溪潺潺，泉水哗哗，配与庙宇、亭台、景物万千。"
];

const heshanImages = [
    "../image/heshangulaoshuixiang.jpg",  // 古劳水乡图片
    "../image/Heshandayanshan.jpg"  // 大雁山图片
];


const heshanTitle = ["古劳水乡", "大雁山"];

// 初始化景点展示
const spotGallery = new SpotGallery('spotDescription', 'spotImage', 'spot-title');

// 设置不同地点的景点和图片
spotGallery.setSpots('kaiping', kaipingSpots, kaipingImages, kaipingTitle);
spotGallery.setSpots('taishan', taishanSpots, taishanImages, taishanTitle);
spotGallery.setSpots('xinghui', xinghuiSpots, xinghuiImages, xinghuiTitle);
spotGallery.setSpots('enping', enpingSpots, enpingImages, enpingTitle);
spotGallery.setSpots('heshan', heshanSpots, heshanImages, heshanTitle);

// 给按钮绑定事件
function showNextSpot() {
    spotGallery.showNextSpot();
}

function switchLocation(location) {
    spotGallery.switchLocation(location);
}

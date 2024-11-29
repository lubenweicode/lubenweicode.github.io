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
    "自力村碉楼群位于广东开平市塘口镇，是世界文化遗产地之一。最初建村的是犁头咀，于清道光十七年（公元1837年）开村，因地形像犁头而得名。自力村有15座风格各异、造型精美、内涵丰富的碉楼，是开平碉楼兴盛时期的杰出代表。自力村碉楼多建于20世纪二三十年代，是当地侨胞为保护家乡亲人的生命财产安全而兴建的。自力村碉楼将中国传统乡村建筑文化与西方建筑文化巧妙地融合在一起，罕有地体现了近代中西文化在中国乡村的广泛交流，成为中国华侨文化的纪念丰碑和独特的世界建筑艺术景观。楼内保存着完整的家具、生活设施、生产用具和日常生活用品，丰富而有趣，是当时华侨文化与生活的见证。",
    "赤坎镇位于广东省珠江三角洲西南部经济开发区内，开平市中部的潭江之滨。历史上曾是开平县城所在地，后来才挪到三埠镇，即现开平市区。赤坎镇原先由新会县分割出来，由于潭江的各支流包围着赤坎镇。赤坎沿潭江而建，南岸是乡村，北岸则是城市，清一色的骑楼，远比开平老街庞大的洋楼群。沿江的堤东堤西路，里面与之平行的中华路，夹在两条大路间还有一条叫“二马路”的小路，这是与江平行的三横，还有许多纵马路与它们交叉形成城区的路网。赤坎镇有一番中西合璧的古朴味道。因此有“中国第五名古镇”之称。",
];

const kaipingImages = [
    "../image/Kaipingdiaolou.jpg",
    "../image/kaipingchikanguzhen.jpg"

];

const kaipingTitle = ["开平自立村碉楼群", "开平赤坎古镇"];

const taishanSpots = [
    "那琴半岛地质海洋公园位于广东省台山市北陡镇南部的海湾，是南中国海上著名的石林景区。这里的海岸线全长超过6000米，拥有600多亩的独特自然奇石林，因其奇特的地质景观而被誉为“南中国海上石林”。公园内的景点以“五湾五山”最为著名，各种独具特色的自然奇观星罗棋布，吸引着成千上万的游客前来游览。这里有令人叹为观止的天然雕塑，如“官帽石”、“佛脚石”、“千年博弈”、 “灵兔望月”以及“镇海神狮”等鬼斧神工的奇岩怪石，展现出大自然的奇妙创造。那琴半岛的海水清澈，海风宜人，环境优美，极为适宜游泳和拍摄。无论是探索地质奇观，还是在大海与奇石之间静静享受自然，都是一次充满魅力的旅行体验。",
    "台山的梅家大院位于广东省江门市台山市，是侨乡文化的代表性建筑之一。梅家大院由当地的梅氏家族于20世纪初建成，具有明显的中西合璧风格，融合了传统岭南建筑特色和西方建筑元素。梅家大院的建筑风格独特，房屋的窗户、门框、雕刻等细节处都能看到西洋风格的影响，这与当时台山大量侨民出国谋生、再归乡建造家宅的历史背景密切相关。台山梅家大院不仅是广东侨乡建筑的代表，也是研究侨乡文化、民间生活和侨民历史的重要文物。如今，这一大院已被列为保护建筑，吸引着大量游客前来，感受独特的侨乡文化和历史氛围。",

];

const taishanImages = [
    "../image/NaQingBandao.png",
    "../image/TaishanMeijiaDayuan.jpg",
];

const taishanTitle = ["台山那琴半岛", "台山梅家大院"];

const xinghuiSpots = [
    "小鸟天堂地处江门市新会区天马村，位于天马河的河心沙洲上，距离广州市约100公里，交通便利。这里是全国最大的天然赏鸟乐园之一，拥有丰富的鸟类资源，每年吸引着成群的鸟类栖息、繁殖，尤其在春秋季节，成群的候鸟纷至沓来，景色壮观。游客可以在这里近距离观察到各种鸟类的生活习性，享受与自然亲密接触的乐趣。除了丰富的鸟类资源，小鸟天堂的自然环境也非常宜人，水域广阔，植被丰富，空气清新。这里的生态环境保持得非常好，是一个理想的生态旅游目的地。游客可以在这里享受宁静的自然风光，体验鸟类观察和摄影的乐趣，进行休闲、放松身心的活动，是家庭出游、团体旅游的热门选择。",
    "广东圭峰山国家森林公园，位于广东省江门市新会区北部、圭峰山风景名胜区内，为中国大陆最南端的国家森林公园。广东圭峰山国家森林公园森林覆盖率98%，植被以针阔叶混交林和阔叶林为主，有台湾相思林、三角枫林、荷木林、按树林等。园内植物100余种，野生动物有蟒蛇、锦鸡、金丝鸟、画眉、穿山甲、金猫等。1997年12月，圭峰山风景区经中华人民共和国林业部审核批准成为国家森林公园。2002年，广东圭峰山国家森林公园被中华人民共和国国家旅游局评为“国家AAAA级风景名胜区”。"

];

const xinghuiImages = [
    "../image/Xinghuixiaoniaotiantang.jpg",  // 小鸟天堂图片
    "../image/xinghuiguifengshan.jpg"  // 圭峰山图片
];

const xinghuiTitle = ["新会小鸟天堂", "新会圭峰山"];

const enpingSpots = [
    "恩平温泉位于广东省恩平市南郊那吉镇，东靠恩平市城区，北倚七星坑原始森林外缘峡谷，西接海拔820米的恩平第一峰烂头岭，南邻325国道。与开（平）阳（江）高速公路擦身而过，高速公路出入口距温泉乐园仅4公里，是一所集住宿、饮食、露天温泉、休闲娱乐、商务会议的旅游度假胜地。恩平温泉温泉水富含多种矿物元素，有明显浴疗效果，对美容、减肥更有特效。恩平温泉的露天温泉池区设有33个东洋风情的温泉池，区内设计分布合理，分有高温池、常温池和低温池。按功能分有理疗池、通用池、娱乐池。野趣园林的布局，既有古朴典雅的南国民风，又有浓浓的异国风情。比较有特色的是瀑布池、中药池、香木池、香水池、情侣池、浪温池、按摩池。恩平温泉享有“南国仙泉”之美誉。",

];

const enpingImages = [
    "../image/Enpingjingjiangwenquan.jpg",  // 恩平温泉图片

];

const enpingTitle = ["恩平锦江温泉"];

const heshanSpots = [
    "古劳水乡，又称围墩水乡，位于广东省江门市鹤山市古劳镇，是一个历史悠久、风光独特的旅游景点，已有700多年的历史。它起源于明朝洪武二十七年（1394年），冯八秀奉旨修建古劳围，将这里从滩涂地区逐步发展为美丽的水乡。水乡得名“围墩”，指的是堤围下的土墩，独特的地理结构为游客提供了丰富的自然景观。古劳水乡坐落在西江岸边，水域广阔，被誉为“水乡”，这里的桑基鱼塘是岭南地区最大、最完整的传统生态养殖区，游客可以欣赏到水产养殖与农业结合的独特景观，感受人与自然和谐相处的智慧。此外，古劳水乡还保留了丰富的岭南文化和历史遗迹。传统的水桥、山院等建筑风格，融合了水乡的自然景色，形成了一个理想的旅游目的地。这里不仅适合观光，还可以进行生态旅游、摄影、休闲度假，是体验岭南水乡风情、领略古老文化的好去处。",
    "大雁山风景区位于广东省江门市鹤山沙泙城区北部，面积达300公顷，主峰海拔310米。它坐落在广湛公路和佛开高速公路附近，靠近鹤山港，面向西江。大雁山因山形酷似大雁展翅直扑西江、俯首饮水而得名。它与南海的西樵山被誉为“姐妹山”，共享山水相依的美景。大雁山风景区山势雄伟，峰峦起伏，奇石林立，山林苍翠，溪流清澈，泉水淙淙流过。这里的自然景色与人文景观交相辉映，庙宇、亭台和各种景物错落有致，是一个融山水、奇石、林木与历史文化为一体的旅游胜地。游客可以在这里登山远眺，享受宁静的自然氛围，感受大雁山的独特魅力。"
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

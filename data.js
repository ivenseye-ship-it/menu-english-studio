window.LEARNING_DATA = {
  vocabulary: [
    {
      id: "menu",
      label: "菜單區塊",
      items: [
        ["menu", "ˈmɛnju", "菜單"],
        ["appetizer / starter", "ˈæpəˌtaɪzɚ / ˈstɑrtɚ", "開胃菜 / 前菜"],
        ["soup", "sup", "湯"],
        ["salad", "ˈsæləd", "沙拉"],
        ["main course", "men kɔrs", "主菜"],
        ["side dish", "saɪd dɪʃ", "配菜"],
        ["dessert", "dɪˈzɝt", "甜點"],
        ["beverage / drinks", "ˈbɛvərɪdʒ / drɪŋks", "飲料"],
        ["breakfast / brunch", "ˈbrɛkfəst / brʌntʃ", "早餐 / 早午餐"],
        ["toast / sandwich", "tost / ˈsændwɪtʃ", "吐司 / 三明治"]
      ]
    },
    {
      id: "cooking",
      label: "烹飪方式",
      items: [
        ["grilled", "grɪld", "烤的，常見 grilled squid"],
        ["roasted", "ˈrostɪd", "烘烤的，常見 roasted potatoes"],
        ["fried / deep-fried", "fraɪd / ˈdipˌfraɪd", "煎或炸 / 油炸"],
        ["sauteed", "soˈted", "快炒、煎炒"],
        ["poached", "potʃt", "水煮、低溫煮"],
        ["steamed", "stimd", "蒸的"],
        ["braised / stewed", "brezd / stud", "燉的"],
        ["smoked", "smokt", "煙燻的"],
        ["marinated", "ˈmærəˌnetɪd", "醃漬的"]
      ]
    },
    {
      id: "seafood",
      label: "海鮮",
      items: [
        ["shrimp / prawn", "ʃrɪmp / prɔn", "蝦"],
        ["crab", "kræb", "螃蟹"],
        ["lobster", "ˈlɑbstɚ", "龍蝦"],
        ["scallop", "ˈskɑləp", "干貝"],
        ["clam / mussel", "klæm / ˈmʌsəl", "蛤蜊 / 淡菜"],
        ["oyster", "ˈɔɪstɚ", "生蠔"],
        ["squid / calamari", "skwɪd / ˌkæləˈmɑri", "魷魚 / 魷魚料理"],
        ["sea bass / salmon / tuna", "si bæs / ˈsæmən / ˈtunə", "海鱸魚 / 鮭魚 / 鮪魚"]
      ]
    },
    {
      id: "main",
      label: "肉類與主菜",
      items: [
        ["beef / pork / chicken", "bif / pɔrk / ˈtʃɪkən", "牛肉 / 豬肉 / 雞肉"],
        ["lamb / veal / turkey", "læm / vil / ˈtɝki", "羊肉 / 小牛肉 / 火雞"],
        ["bacon / ham / sausage", "ˈbekən / hæm / ˈsɔsɪdʒ", "培根 / 火腿 / 香腸"],
        ["steak / sirloin / ribeye", "stek / ˈsɝˌlɔɪn / ˈrɪbˌaɪ", "牛排 / 沙朗 / 肋眼"],
        ["filet mignon", "fɪˌle mɪnˈjɑn", "菲力"],
        ["schnitzel", "ˈʃnɪtsəl", "炸肉排"],
        ["patty", "ˈpæti", "漢堡肉"]
      ]
    },
    {
      id: "vegetables",
      label: "蔬菜配菜",
      items: [
        ["potato / pumpkin / peas", "pəˈteto / ˈpʌmpkɪn / piz", "馬鈴薯 / 南瓜 / 豌豆"],
        ["celery / eggplant / radish", "ˈsɛləri / ˈɛgˌplænt / ˈrædɪʃ", "芹菜 / 茄子 / 蘿蔔"],
        ["carrot / tomato / onion", "ˈkærət / təˈmeto / ˈʌnjən", "胡蘿蔔 / 番茄 / 洋蔥"],
        ["garlic / leek / spinach", "ˈgɑrlɪk / lik / ˈspɪnɪtʃ", "大蒜 / 韭蔥 / 菠菜"],
        ["mushroom / asparagus / lettuce", "ˈmʌʃrum / əˈspærəgəs / ˈlɛtəs", "蘑菇 / 蘆筍 / 萵苣"],
        ["arugula / zucchini / bell pepper", "əˈrugələ / zuˈkini / bɛl ˈpɛpɚ", "芝麻葉 / 櫛瓜 / 甜椒"]
      ]
    },
    {
      id: "sauce",
      label: "醬料起司",
      items: [
        ["sauce / dressing", "sɔs / ˈdrɛsɪŋ", "醬汁 / 沙拉醬"],
        ["aioli / pesto", "aɪˈoli / ˈpɛsto", "蒜味醬 / 羅勒青醬"],
        ["hollandaise / balsamic", "ˌhɑlənˈdez / bɔlˈsæmɪk", "荷蘭醬 / 巴薩米克醋"],
        ["olive oil / mustard", "ˈɑlɪv ɔɪl / ˈmʌstɚd", "橄欖油 / 芥末醬"],
        ["mozzarella / parmesan", "ˌmɑtsəˈrɛlə / ˈpɑrməˌzɑn", "莫札瑞拉 / 帕瑪森"],
        ["feta / brie / burrata", "ˈfɛtə / bri / buˈrɑtə", "菲達 / 布里 / 布拉塔"]
      ]
    },
    {
      id: "drinks",
      label: "飲料酒單",
      items: [
        ["still water / sparkling water", "stɪl ˈwɔtɚ / ˈspɑrklɪŋ ˈwɔtɚ", "無氣泡水 / 氣泡水"],
        ["coffee / tea / juice", "ˈkɔfi / ti / dʒus", "咖啡 / 茶 / 果汁"],
        ["beer / wine", "bɪr / waɪn", "啤酒 / 葡萄酒"],
        ["red wine / white wine", "rɛd waɪn / hwaɪt waɪn", "紅酒 / 白酒"],
        ["sparkling wine / champagne", "ˈspɑrklɪŋ waɪn / ʃæmˈpen", "氣泡酒 / 香檳"],
        ["cocktail / cider", "ˈkɑkˌtel / ˈsaɪdɚ", "雞尾酒 / 蘋果酒"]
      ]
    }
  ],
  examples: [
    {
      title: "早餐 / 早午餐",
      rows: [
        ["smoked salmon, red onion", "煙燻鮭魚、紅洋蔥", "冷食系早餐、bagel 或 toast 類，口味偏鹹鮮。"],
        ["avocado, poached eggs, feta cheese", "酪梨、水波蛋、菲達起司", "地中海風味，適合想吃蔬菜和蛋。"],
        ["poached eggs, sauteed spinach, hollandaise", "水波蛋、炒菠菜、荷蘭醬", "類似班尼迪克蛋，醬汁偏奶油濃郁。"],
        ["Croque Monsieur", "法式火腿起司熱三明治", "通常是火腿、起司、白醬的熱食。"],
        ["Zucchini Pancakes", "櫛瓜煎餅", "pancake 不一定是甜的，也可能是鹹味蔬菜煎餅。"]
      ]
    },
    {
      title: "海鮮 / 沙拉 / 前菜",
      rows: [
        ["Prawns fried in garlic oil", "蒜油煎蝦", "fried 不一定是裹粉炸，也可能是煎炒。"],
        ["Burrata with Genovese pesto", "布拉塔起司、熱那亞青醬", "奶香起司加青醬，通常是冷前菜。"],
        ["grilled squid", "烤魷魚", "grilled 是烤；若後面有 chili sauce，代表可能微辣。"],
        ["Lobster, tiger prawns, calamari", "龍蝦、虎蝦、魷魚", "一串海鮮名通常是海鮮拼盤或海鮮義大利麵。"],
        ["clams in mariniere sauce or fried", "蛤蜊，可選白酒海鮮醬或炸的", "or fried 表示可選炸法。"]
      ]
    },
    {
      title: "義大利麵 / 披薩 / 主菜",
      rows: [
        ["gnocchi with basil pesto", "麵疙瘩搭配羅勒青醬", "gnocchi 是馬鈴薯麵疙瘩，pesto 是青醬。"],
        ["tagliatelle with cream sauce", "寬扁麵搭配奶油醬", "cream sauce 代表口味濃郁。"],
        ["beef and pork patty", "牛豬肉漢堡排", "patty 是漢堡肉，常見於漢堡或餐盤主菜。"],
        ["Tomato sauce, mozzarella, mixed seafood", "番茄醬、莫札瑞拉、綜合海鮮", "通常是海鮮披薩。"],
        ["spicy salami", "辣味臘腸", "代表會辣，常見於 Diavola 披薩。"]
      ]
    },
    {
      title: "甜點 / 飲料 / 酒單",
      rows: [
        ["Panna cotta with berries", "義式奶酪搭配莓果", "常見義式甜點，口感像奶酪。"],
        ["Chocolate lava cake", "巧克力熔岩蛋糕", "中間通常是流心巧克力。"],
        ["White Wines", "白酒區", "酒單看到 white wines 就是白酒列表。"],
        ["Red Wines", "紅酒區", "通常會標杯裝或瓶裝價格。"],
        ["Aperol Spritz", "阿佩羅氣泡調酒", "歐洲常見餐前酒，偏橘香、微苦甜。"]
      ]
    }
  ],
  phrases: [
    {
      title: "入座與點餐",
      items: [
        ["A table for two, please.", "兩位，謝謝。"],
        ["Do you have an English menu?", "請問有英文菜單嗎？"],
        ["Could I have a few more minutes?", "可以再給我幾分鐘嗎？"],
        ["I would like the grilled sea bass, please.", "我想要烤海鱸魚，謝謝。"],
        ["What do you recommend?", "你推薦什麼？"]
      ]
    },
    {
      title: "確認食材",
      items: [
        ["Is it spicy?", "這會辣嗎？"],
        ["Does it come with fries or salad?", "這有附薯條或沙拉嗎？"],
        ["Does this contain seafood?", "這含有海鮮嗎？"],
        ["Could you make it without onions?", "可以不要洋蔥嗎？"],
        ["Could I have the sauce on the side?", "醬可以另外放嗎？"]
      ]
    },
    {
      title: "結帳與旅行",
      items: [
        ["Could we have the bill, please?", "可以給我們帳單嗎？"],
        ["Can I pay by card?", "可以刷卡嗎？"],
        ["Where is platform 3?", "第 3 月台在哪裡？"],
        ["I have a reservation under Chen.", "我有訂房，姓 Chen。"],
        ["Could you store my luggage?", "可以寄放我的行李嗎？"]
      ]
    }
  ],
  weeks: [
    ["Week 1", "看懂菜單的基本語言", "菜單分類、食材、烹飪方式、醬料與 KK 音標", "看到菜名時能辨認主食材與料理方式。", "vocab"],
    ["Week 2", "拆解真實英文菜單", "早餐、海鮮、義大利麵、披薩、甜點與飲料", "能從真實菜單原文判斷一道菜大致會端上什麼。", "menu-lab"],
    ["Week 3", "完成一整段餐廳對話", "入座、點餐、確認食材、特殊需求與結帳", "能用完整句子自行點餐並處理常見問題。", "speaking"],
    ["Week 4", "旅行實戰與總複習", "餐廳情境演練、交通、飯店、每日 10 分鐘複習", "能在歐洲旅行中看懂、開口並完成基本溝通。", "practice"]
  ]
};

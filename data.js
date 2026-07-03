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
      title: "早餐與早午餐｜完整菜單原文",
      rows: [
        ["Eggs Toasted: toasted bread, scrambled eggs, bacon, and avocado cream.", "炒蛋吐司：烤麵包、炒蛋、培根與酪梨醬。", "scrambled eggs 是炒蛋；avocado cream 是酪梨醬。"],
        ["Italian Toast: toasted bread, cherry tomatoes, poached eggs, and eggplant cream.", "義式吐司：烤麵包、小番茄、水波蛋與茄子醬。", "poached eggs 是水波蛋；eggplant cream 是茄子泥狀醬。"],
        ["Croque Monsieur: French toast with sandwich bread, béchamel, ham, and cheese.", "法式火腿起司三明治：吐司、白醬、火腿與起司。", "béchamel 是白醬，這道通常是熱的鹹味三明治。"],
        ["Zucchini Pancakes: with Taleggio fondue, poached eggs, and Jerusalem artichoke chips.", "櫛瓜煎餅：塔雷吉歐起司醬、水波蛋與菊芋脆片。", "pancakes 在這裡是鹹食；fondue 表示融化起司醬。"],
        ["New York New York Bagel: cream cheese, smoked salmon, red onion, caper berries, and salad.", "紐約貝果：奶油起司、煙燻鮭魚、紅洋蔥、酸豆果與沙拉。", "這是完整的冷食系煙燻鮭魚貝果配料。"]
      ]
    },
    {
      title: "義式前菜與主菜｜完整菜單原文",
      rows: [
        ["Avocado-Salmon Toast: sourdough toast with avocado cream, marinated salmon, lettuce, carrots, and radishes.", "酪梨鮭魚吐司：酸種吐司、酪梨醬、醃鮭魚、生菜、胡蘿蔔與蘿蔔。", "marinated salmon 是醃漬鮭魚，不一定是熟食。"],
        ["Dranniki: potato pancakes with sour cream and salmon.", "東歐馬鈴薯煎餅：搭配酸奶油與鮭魚。", "sour cream 是酸奶油；potato pancakes 是鹹味馬鈴薯餅。"],
        ["Cebureki: fried turnover with mixed pork and beef.", "炸餡餅：內餡是豬牛混合肉。", "fried turnover 是包餡後油炸的麵皮料理。"],
        ["Charcuterie Board: Culatta, pata negra, mortadella, salami, and burrata.", "冷肉拼盤：Culatta 火腿、黑蹄火腿、義式肉腸、莎樂美與布拉塔起司。", "charcuterie 是冷肉拼盤，通常適合分享。"],
        ["Sea Bass Turban with fennel salad and Jerusalem artichoke chips.", "海鱸魚捲：搭配茴香沙拉與菊芋脆片。", "fennel 有明顯茴香味；chips 在此指薄脆片。"]
      ]
    },
    {
      title: "泰式料理｜完整菜單原文",
      rows: [
        ["Pla Hima Yang Kaeng Khiaowan: grilled snow fish in green curry with eggplant and sweet basil leaves.", "綠咖哩烤雪魚：搭配茄子與甜羅勒葉。", "green curry 通常有辣度；sweet basil 是九層塔類香草。"],
        ["Massaman Kae: lamb massaman with potato, tomato, and coconut milk.", "瑪莎曼羊肉咖哩：羊肉、馬鈴薯、番茄與椰奶。", "massaman 偏香甜濃郁，通常比綠咖哩溫和。"],
        ["Goong Thod Sauce Makam: crispy prawn with tamarind sauce, fried onion, and fried chili.", "羅望子醬酥炸蝦：搭配炸洋蔥與炸辣椒。", "crispy prawn 表示酥炸；tamarind sauce 帶酸甜味。"],
        ["Phad Kaprao Nua: wok-fried Australian beef tenderloin with hot basil and chili.", "打拋牛菲力：澳洲牛菲力、打拋葉與辣椒快炒。", "hot basil 和 chili 都提示這道菜可能偏辣。"],
        ["Pla Neung Manao: steamed sea bass fillet with chili lime sauce and steamed cabbage.", "檸檬蒸海鱸魚：辣椒萊姆醬與蒸高麗菜。", "steamed 是清蒸，但 chili lime sauce 可能酸辣。"]
      ]
    },
    {
      title: "海鮮、披薩與西式主菜｜完整菜單原文",
      rows: [
        ["Bouillabaisse: baked sea bass, tiger prawn, scallop, mussel, saffron, and fennel.", "法式海鮮湯：烤海鱸魚、虎蝦、干貝、淡菜、番紅花與茴香。", "同時含多種甲殼與貝類海鮮。"],
        ["Sea Bass Fillet: pan-seared sea bass, sautéed morning glory, mashed potatoes, and tamarind sauce.", "香煎海鱸魚：炒空心菜、馬鈴薯泥與羅望子醬。", "pan-seared 是平底鍋煎；tamarind sauce 帶酸甜味。"],
        ["Norwegian Salmon: roasted salmon with Cajun spices, crushed zucchini and potatoes, lemon zest, basil, and tomato-pineapple sauce.", "挪威烤鮭魚：卡郡香料、櫛瓜馬鈴薯泥、檸檬皮、羅勒與番茄鳳梨醬。", "Cajun spices 通常帶香料味與微辣。"],
        ["Seafood Platter: lobster, tiger prawns, calamari, sea bass, Hokkaido scallops, and grilled Da Lat vegetables.", "海鮮拼盤：龍蝦、虎蝦、魷魚、海鱸魚、北海道干貝與烤大叻蔬菜。", "platter 是拼盤，份量通常適合分享。"],
        ["Italian Seafood Pizza: prawns, clams, mussels, squid, arugula, and mozzarella.", "義式海鮮披薩：蝦、蛤蜊、淡菜、魷魚、芝麻葉與莫札瑞拉。", "完整配料顯示含多種貝類與起司。"]
      ]
    },
    {
      title: "西班牙小食與甜點｜完整菜單原文",
      rows: [
        ["Gioiella Burrata with Genovese pesto and cherry tomatoes.", "布拉塔起司搭配熱那亞青醬與小番茄。", "pesto 通常含羅勒、起司與堅果。"],
        ["Cured ham croquettes with fresh Latxa sheep's milk from the Ultzama Valley.", "熟成火腿可樂餅，使用 Ultzama 山谷的新鮮 Latxa 羊奶。", "croquettes 是裹粉油炸的小點，內含火腿與羊奶。"],
        ["Andalusian-style calamari with Ibarra green chili emulsion.", "安達魯西亞式魷魚，搭配 Ibarra 青辣椒乳化醬。", "calamari 是魷魚；green chili emulsion 可能微辣。"],
        ["Rías Gallegas cockles, charcoal-grilled or fried.", "加利西亞鳥蛤，可選炭烤或油炸。", "or 表示二選一，點餐時需說 grilled 或 fried。"],
        ["Cambados clams in marinière sauce or fried.", "Cambados 蛤蜊，可選白酒海鮮醬煮或油炸。", "marinière sauce 通常含白酒、奶油或香草。"]
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

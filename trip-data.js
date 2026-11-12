window.TRIP_INITIAL_DATA = {
  "trip": {
    "title": "沖縄旅行",
    "startDate": "2026-11-13",
    "endDate": "2026-11-16",
    "nights": 3,
    "hotel": "ザ・ビーチリゾート瀬底・ヒルトンクラブ",
    "emergencyContact": "980476300",
    "seats": [
      "14D / 14F / 14G",
      "13D / 13F / 13G"
    ]
  },
  "transport": [
    {
      "id": "tr1",
      "type": "train",
      "label": "南与野 → 赤羽",
      "date": "2026-11-13",
      "depart": "06:23",
      "arrive": "06:41",
      "from": "南与野駅",
      "to": "赤羽駅",
      "route": "電車",
      "detail": "羽田空港へ向かう乗車区間",
      "cost": "1,047円",
      "memo": "Excelに記載されていた金額。区間別金額か要確認。"
    },
    {
      "id": "tr2",
      "type": "train",
      "label": "赤羽 → 浜松町",
      "date": "2026-11-13",
      "depart": "06:50",
      "arrive": "07:24",
      "from": "赤羽駅",
      "to": "浜松町駅",
      "route": "電車",
      "detail": "乗り換え",
      "cost": "",
      "memo": ""
    },
    {
      "id": "tr3",
      "type": "train",
      "label": "浜松町 → 羽田空港第2ターミナル",
      "date": "2026-11-13",
      "depart": "07:32",
      "arrive": "07:57",
      "from": "浜松町駅",
      "to": "羽田空港第2ターミナル",
      "route": "東京モノレール",
      "detail": "空港へ移動",
      "cost": "",
      "memo": ""
    },
    {
      "id": "tr4",
      "type": "flight",
      "label": "往路：羽田 → 那覇",
      "date": "2026-11-13",
      "depart": "09:15",
      "arrive": "12:05",
      "from": "羽田空港",
      "to": "那覇空港",
      "route": "航空便",
      "detail": "便名・ターミナル・搭乗口は必要に応じて追記",
      "cost": "",
      "memo": "座席情報は旅行概要に記載。"
    },
    {
      "id": "tr5",
      "type": "flight",
      "label": "復路：那覇 → 羽田",
      "date": "2026-11-16",
      "depart": "",
      "arrive": "19:15",
      "from": "那覇空港",
      "to": "羽田空港",
      "route": "航空便",
      "detail": "16:55 那覇空港到着予定。出発時刻は未入力。",
      "cost": "",
      "memo": "Excelの記載「16:55 那覇空港／19:15 羽田空港」から登録。"
    },
    {
      "id": "tr6",
      "type": "bus",
      "label": "新都心行きバス",
      "date": "2026-11-16",
      "depart": "",
      "arrive": "",
      "from": "那覇空港",
      "to": "新都心",
      "route": "バス",
      "detail": "時刻・乗り場を追記してください。",
      "cost": "",
      "memo": ""
    }
  ],
  "itinerary": [
    {
      "id": "ev1",
      "day": 1,
      "time": "06:00",
      "title": "出発",
      "category": "移動",
      "place": "",
      "address": "",
      "phone": "",
      "duration": "",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev2",
      "day": 1,
      "time": "06:23",
      "title": "南与野駅",
      "category": "電車",
      "place": "南与野駅 → 赤羽駅",
      "address": "",
      "phone": "",
      "duration": "06:41 赤羽着",
      "cost": "1,047円",
      "memo": "電車の詳細は「移動」タブにも掲載。"
    },
    {
      "id": "ev3",
      "day": 1,
      "time": "06:50",
      "title": "赤羽駅",
      "category": "電車",
      "place": "赤羽駅 → 浜松町駅",
      "address": "",
      "phone": "",
      "duration": "07:24 浜松町着",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev4",
      "day": 1,
      "time": "07:32",
      "title": "浜松町駅",
      "category": "電車",
      "place": "浜松町駅 → 羽田空港第2ターミナル",
      "address": "",
      "phone": "",
      "duration": "07:57 羽田第2ターミナル着",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev5",
      "day": 1,
      "time": "09:15",
      "title": "羽田空港 出発",
      "category": "飛行機",
      "place": "羽田空港 → 那覇空港",
      "address": "",
      "phone": "",
      "duration": "12:05 那覇空港着",
      "cost": "",
      "memo": "便名・ターミナル・搭乗口を追記してください。"
    },
    {
      "id": "ev6",
      "day": 1,
      "time": "13:00",
      "title": "レンタカー受取",
      "category": "移動",
      "place": "沖縄県那覇市赤嶺2-13-13",
      "address": "沖縄県那覇市赤嶺2-13-13",
      "phone": "098-858-0023",
      "duration": "車で約10分",
      "cost": "",
      "memo": "ゾーン11の「レンタカーバス乗り場」より送迎。"
    },
    {
      "id": "ev7",
      "day": 1,
      "time": "13:30",
      "title": "Lucky Tacos",
      "category": "食事",
      "place": "〒900-0013 沖縄県那覇市牧志3丁目1-11",
      "address": "〒900-0013 沖縄県那覇市牧志3丁目1-11",
      "phone": "098-943-4901 / 098-868-3502",
      "duration": "車で約15分",
      "cost": "",
      "memo": "駐車場なし。コインパーキングを利用。"
    },
    {
      "id": "ev8",
      "day": 1,
      "time": "",
      "title": "万座毛",
      "category": "観光",
      "place": "〒904-0411 沖縄県国頭郡恩納村恩納",
      "address": "〒904-0411 沖縄県国頭郡恩納村恩納",
      "phone": "098-966-8080",
      "duration": "車で約60分",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev9",
      "day": 1,
      "time": "",
      "title": "食材買い出し（本部町）",
      "category": "買い物",
      "place": "本部町",
      "address": "",
      "phone": "",
      "duration": "車",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev10",
      "day": 1,
      "time": "",
      "title": "ホテルチェックイン",
      "category": "宿泊",
      "place": "ザ・ビーチリゾート瀬底・ヒルトンクラブ",
      "address": "〒905-0227 沖縄県国頭郡本部町瀬底1084-4",
      "phone": "0980-47-6300",
      "duration": "",
      "cost": "",
      "memo": "元データの連絡先「980476300」を電話番号形式に整形。要確認。"
    },
    {
      "id": "ev11",
      "day": 2,
      "time": "09:00",
      "title": "ホテル出発",
      "category": "移動",
      "place": "ホテル",
      "address": "",
      "phone": "",
      "duration": "",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev12",
      "day": 2,
      "time": "10:00",
      "title": "シュノーケリング",
      "category": "体験",
      "place": "〒905-0227 沖縄県国頭郡本部町瀬底2646-3 1階",
      "address": "〒905-0227 沖縄県国頭郡本部町瀬底2646-3 1階",
      "phone": "070-9376-7368",
      "duration": "車で約120分（元データ記載）",
      "cost": "",
      "memo": "元データに「8:30開園・入館締切17:30」と記載。施設情報か要確認。"
    },
    {
      "id": "ev13",
      "day": 2,
      "time": "",
      "title": "Fun cafe",
      "category": "食事",
      "place": "〒905-0227 沖縄県国頭郡本部町瀬底557",
      "address": "〒905-0227 沖縄県国頭郡本部町瀬底557",
      "phone": "0980-47-5537",
      "duration": "",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev14",
      "day": 2,
      "time": "",
      "title": "古民家レストラン平津",
      "category": "食事",
      "place": "〒905-0018 沖縄県名護市大西3丁目21-19",
      "address": "〒905-0018 沖縄県名護市大西3丁目21-19",
      "phone": "090-7519-2419 / 090-7587-2419",
      "duration": "",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev15",
      "day": 3,
      "time": "09:00",
      "title": "ホテル出発",
      "category": "移動",
      "place": "ホテル",
      "address": "",
      "phone": "",
      "duration": "",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev16",
      "day": 3,
      "time": "09:30",
      "title": "沖縄美ら海水族館",
      "category": "観光",
      "place": "〒905-0206 沖縄県国頭郡本部町石川424",
      "address": "〒905-0206 沖縄県国頭郡本部町石川424",
      "phone": "0980-48-3748",
      "duration": "車で約20分",
      "cost": "2,180円",
      "memo": ""
    },
    {
      "id": "ev17",
      "day": 3,
      "time": "12:00",
      "title": "海津丸",
      "category": "食事",
      "place": "〒905-0205 沖縄県国頭郡本部町山川1421",
      "address": "〒905-0205 沖縄県国頭郡本部町山川1421",
      "phone": "0980-48-3343",
      "duration": "車で約20分",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev18",
      "day": 3,
      "time": "13:30",
      "title": "今帰仁城跡",
      "category": "観光",
      "place": "〒905-0428 沖縄県国頭郡今帰仁村字今泊5101",
      "address": "〒905-0428 沖縄県国頭郡今帰仁村字今泊5101",
      "phone": "0980-56-4400",
      "duration": "車で約10分",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev19",
      "day": 4,
      "time": "10:00",
      "title": "ホテルチェックアウト",
      "category": "宿泊",
      "place": "ザ・ビーチリゾート瀬底・ヒルトンクラブ",
      "address": "〒905-0227 沖縄県国頭郡本部町瀬底1084-4",
      "phone": "0980-47-6300",
      "duration": "",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev20",
      "day": 4,
      "time": "",
      "title": "ブセナ海中公園",
      "category": "観光",
      "place": "〒905-0026 沖縄県名護市喜瀬1744-1",
      "address": "〒905-0026 沖縄県名護市喜瀬1744-1",
      "phone": "",
      "duration": "車で約40分",
      "cost": "1,560円〜",
      "memo": "元データに「11月の臨時休園日（海中展望塔・グラスボート）：13日・15日」と記載。旅行日程中の11月15日が該当するため、訪問前に営業状況を要確認。"
    },
    {
      "id": "ev21",
      "day": 4,
      "time": "",
      "title": "昼食",
      "category": "食事",
      "place": "",
      "address": "",
      "phone": "",
      "duration": "",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev22",
      "day": 4,
      "time": "",
      "title": "夕飯調達",
      "category": "買い物",
      "place": "",
      "address": "",
      "phone": "",
      "duration": "",
      "cost": "",
      "memo": ""
    },
    {
      "id": "ev23",
      "day": 4,
      "time": "15:00",
      "title": "レンタカー返却",
      "category": "移動",
      "place": "沖縄県那覇市赤嶺2-13-13",
      "address": "沖縄県那覇市赤嶺2-13-13",
      "phone": "098-858-0023",
      "duration": "",
      "cost": "",
      "memo": "ゾーン11の「レンタカーバス乗り場」より送迎。"
    },
    {
      "id": "ev24",
      "day": 4,
      "time": "16:55",
      "title": "那覇空港 到着予定",
      "category": "飛行機",
      "place": "那覇空港",
      "address": "沖縄県那覇市鏡水150",
      "phone": "",
      "duration": "19:15 羽田空港着（元データ記載）",
      "cost": "",
      "memo": "16:55は空港到着時刻として登録。飛行機の出発時刻は未入力。"
    },
    {
      "id": "ev25",
      "day": 4,
      "time": "",
      "title": "新都心行きバス",
      "category": "バス",
      "place": "那覇空港 → 新都心",
      "address": "",
      "phone": "",
      "duration": "",
      "cost": "",
      "memo": "時刻・乗り場を追記してください。"
    }
  ],
  "budget": [
    {
      "id": "b1",
      "category": "交通",
      "item": "電車・飛行機・レンタカー",
      "planned": "",
      "actual": ""
    },
    {
      "id": "b2",
      "category": "宿泊",
      "item": "ホテル",
      "planned": "",
      "actual": ""
    },
    {
      "id": "b3",
      "category": "食事",
      "item": "食事・買い出し",
      "planned": "",
      "actual": ""
    },
    {
      "id": "b4",
      "category": "観光・体験",
      "item": "入館料・アクティビティ",
      "planned": "",
      "actual": ""
    },
    {
      "id": "b5",
      "category": "買い物",
      "item": "お土産など",
      "planned": "",
      "actual": ""
    },
    {
      "id": "b6",
      "category": "その他",
      "item": "その他",
      "planned": "",
      "actual": ""
    }
  ],
  "packing": [
    {
      "id": "p1",
      "name": "着替え",
      "done": false
    },
    {
      "id": "p2",
      "name": "羽織もの",
      "done": false
    },
    {
      "id": "p3",
      "name": "水着",
      "done": false
    },
    {
      "id": "p4",
      "name": "タオル",
      "done": false
    },
    {
      "id": "p5",
      "name": "日焼け止め",
      "done": false
    },
    {
      "id": "p6",
      "name": "帽子・サングラス",
      "done": false
    },
    {
      "id": "p7",
      "name": "財布・現金",
      "done": false
    },
    {
      "id": "p8",
      "name": "身分証・保険証",
      "done": false
    },
    {
      "id": "p9",
      "name": "スマートフォン・充電器",
      "done": false
    },
    {
      "id": "p10",
      "name": "モバイルバッテリー",
      "done": false
    },
    {
      "id": "p11",
      "name": "子ども用品",
      "done": false
    },
    {
      "id": "p12",
      "name": "常備薬・酔い止め",
      "done": false
    }
  ]
};

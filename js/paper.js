/**
 * Created by Heiliuer on 2017/11/1 0001.
 */
var SECTION_DATA = [
    // {
    //     code: "P",
    //     name: "小学"
    // },
    {
        code: "J",
        name: "初中"
    },
    {
        code: "S",
        name: "高中"
    },

];
var SUBJECT_DATA = [
    {
        "name": '语文',
        "subjectCode": 'C',
        "questions": [
            {
                "id": 1,
                "section": "J",// 小学（primary） P 初中（junior）J 高中（sunior） S
                "content": "下列加点字的注音全部正确的一组是（     ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "酝酿（yùn ）   窠巢（kē )      应和（hé）    发髻（jì）",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "嘹亮（liáo ）  高邈（miǎo）    粼粼（lín）   贮蓄（xù）",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "彩棱（léng）   吝啬（lìn）     莅临（lì）    静谧（bì）",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "淅沥（lì  ）   酝酿（yùn）     菜畦（wā ）   雪骤（zhòu）",
                        "images": []
                    }
                ],
            },
            {
                "id": 2,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列各句中加点成语的不正确的一项是（     ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "“四海翻腾云水怒，五洲震荡风雷激。”2016年的如火如荼的中美关系，颇可以用这句诗概括。",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "三九寒天,梅花依旧花枝招展,立在风雪之中,守望心中的白马王子。",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "“天下三分明月夜，二分无赖是扬州”，这句脍炙人口的诗句，出自唐代诗人徐凝的《忆扬州》。",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "他为人谦和，与人处事从不咄咄逼人。",
                        "images": []
                    },
                ],
            },
            {
                "id": 3,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列句子中没有语病的一项是（       ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "A. 《扬州晚报》联合市环保局、OFO共享单车、扬州技师学院、广陵骑士团和绿色扬州环保公益团，在京华城中庭开展迎接“无车日”。",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "韩国总统朴槿惠被爆“亲信干政”丑闻，一度发酵为“2016年最烧脑韩剧”。",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "雾霾是所有有毒污染雾的总称，在北京，雾霾的主要成分是从汽车排气管和烟囱释放出的颗粒物造成的。",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "当电视剧《那年花开月正圆》开播以来，迎来了观众的一片喝彩。",
                        "images": []
                    }
                ],
            },
            {
                "id": 4,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列解说有误的一项是（    ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "我到了自家房外，我的母亲早已迎出来了，接着便飞出了八岁的侄儿宏儿。（解说：这句话运用了比拟的的修辞手法。）",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "张耒与黄庭坚、晁补之、秦观并称“苏门四学士”，苏东坡称他的诗文“汪洋淡泊，有一唱三叹之声。”（解说：这句话中的标点符号使用不正确。）",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": " 青春是一双明亮的眸子。在知识的海洋里不停地搜寻着自己需要的知识。（解说：这句话用了明喻的修辞。）",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "镰刀、昨天、精神、喉咙（ 解说：这四个词都是名词。）",
                        "images": []
                    }
                ],
            },
            {
                "id": 5,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列有关文学常识及课文内容的表述正确的一项是（     ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "《春》选自《朱自清全集》，作者朱自清，江苏扬州人。这篇散文通过描写春草图、春花图、春风图等来展现春景，感悟作者对春天的热爱、歌颂与赞美之情。",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "《济南的冬天》围绕“温暖”这一特点，运用比喻、拟人等修辞方法，生动地描绘了济南的天气、山、水，抒发了作者对济南的无限热爱之情。",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": " 《雨的四季》的作者巴金用诗一样的语言，调动我们的各种感官，全面感受这四季之雨，让我们亲近雨，体会雨的不同情致与风趣。",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "《天净沙.秋思》这首词作者是元代的马致远，刻画了一位游子强烈的思乡之情。",
                        "images": []
                    }
                ],
            },

            {
                "id": 10,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下面文言句子中，加点的词没有词类活用现象的一项是（）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "其达士，洁其居，美其服",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "终不能踰河而北",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "然后发天下丁男以守北河",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "兽聚而鸟散，从之如搏景",
                        "images": []
                    }
                ],
            },
            {
                "id": 11,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下面文言句子中，不属于文言特殊句式的一项是（）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "吾与之共知越国之政",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "苟得闻子大夫之言，何后之有",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "起于黄、腄、琅邪负海之郡",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "兵者凶器也",
                        "images": []
                    }
                ],
                "type": "2",
                "require": true
            },
            {
                "id": 12,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列有关文学常识的表述，有误的一项是（）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "《再别康桥》的作者徐志摩和提出“三美”说的闻一多，都是新月派诗人。",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "元杂剧《窦娥冤》的作者是关汉卿，明传奇《牡丹亭》的作者是冯梦龙。",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "鲁迅的小说《祝福》中祥林嫂的种种不幸遭遇，反映了封建礼教对人的毒害。",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "《守财奴》选自《欧也妮•葛朗台》，作者是法国批判现实主义作家巴尔扎克。",
                        "images": []
                    }
                ]
            }
        ]
    },
    {
        "name": '数学',
        "subjectCode": 'M',

        "questions": [
            {
                "id": 13,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列说法中正确的是（  ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "含有一个未知数的等式是一元一次方程",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "未知数的次数都是1次的方程是一元一次方程",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "含有一个未知数，并且未知数的次数都是一次的方程是一元一次方程",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "2y-3=1是一元一次方程",
                        "images": []
                    },
                ],
            },
            {
                "id": 14,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列四组变形中，变形正确的是（  ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "由5x+7=0得5x=-7",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "由2x-3=0得2x-3+3=0",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "由x/6=2得x=1/3",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "由5x=7得x=35",
                        "images": []
                    },
                ],
            },
            {
                "id": 15,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列各方程中，是一元一次方程的是（  ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "3x+2y=5",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "y2-6y+5=0",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "x/3-3=1/x",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "3x-2=4x-7",
                        "images": []
                    },
                ],
            },
            {
                "id": 16,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "下列各组方程中，解相同的方程是（  ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "x=3与4x+12=0",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "x+1=2与（x+1）x=2x",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "7x-6=25与(7x-1)/5=6",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "x=9与x+9=0",
                        "images": []
                    },
                ],
            },
            {
                "id": 17,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "一条公路甲队独修需24天，乙队需40天，若甲、乙两队同时分别从两端开始修，(     )天后可将全部修完。",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "24",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "40",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "15",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "16",
                        "images": []
                    },
                ],
            },
            {
                "id": 18,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "某人从甲地到乙地，水路比公路近40千米，但乘轮船比汽车要多用3小时，已知轮船速度为24千米/时，汽车速度为40千米/时，则水路和公路的长分别为（  ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "280千米，240千米",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "240千米，280千米",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "200千米，240千米",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "160千米，200千米",
                        "images": []
                    },
                ],
            },
            {
                "id": 19,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "已知i是虚数单位，若i(a+i)=1+i,则实数a的值为（  ）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "1",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "0",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "-1",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "-2",
                        "images": []
                    },
                ],
            },
            {
                "id": 20,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "已知直线x-y+m=0与圆O:x2+y2=1相交于A,B两点，且△AOB为正三角形，则实数m的值为(  )",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "根号3/2",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "根号6/2",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "根号3/2或-根号3/2",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "根号6/2或-根号6/2",
                        "images": []
                    },
                ],
            },
            {
                "id": 21,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "content": "已知双曲线ax2-y2=1的一条渐近线方程为y=x，则实数k的值为(  )。",
                "images": [],
                "choices": []
            }

        ]
    }
]
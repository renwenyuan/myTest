/**
 * Created by Heiliuer on 2017/11/1 0001.
 */
var SECTION_DATA = [
    {
        code: "P",
        name: "小学"
    },
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
        "subjectCode":'C',
        "questions": [
            {
                "id": 1,
                "section": "P",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "title": "【课堂调查】信息时代的教育自信",
                "content": "你选择成为华师师范生的原因是什么？",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "报志愿的时候家里人或者老师叫我报我就报了",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "师范生经济负担较轻、就业有保障等",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "我非常希望成为一名教师",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "其他原因",
                        "images": []
                    }
                ],
                "type": "2",
                "require": false
            },
            {
                "id": 2,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "title": "【课堂提问】信息时代的教育自信",
                "content": "你如何看待教师职业？",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "教师同其他职业一样，都是为了谋生",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "教师职业发展前景有限，如果有机会我将选择其他更有前途的职业",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "我喜欢当老师，但是感觉教师职业工作辛苦、待遇低",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "教师职业是对国家和社会未来发展最关键的职业之一",
                        "images": []
                    },
                    {
                        "id": "E",
                        "content": "其他",
                        "images": []
                    }
                ],
                "type": "2",
                "require": true
            },
            {
                "id": 3,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "title": "【课堂提问】信息时代的教育自信",
                "content": "你认为教育信息化对我国教育现代化的意义何在？",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "教育信息化是我国教育赶超国际先进水平的一次历史机遇",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "教育信息化就是一个噱头，对提高教育质量没什么实质意义",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "全世界都在搞教育信息化，我们当然也应该跟着搞，至于有没有用以后再看",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "我到现在还没有搞清楚什么是教育信息化",
                        "images": []
                    }
                ],
                "type": "2",
                "require": true
            },
            {
                "id": 4,
                "section": "P",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "title": "【课后提问】信息时代的教育自信",
                "content": "你对我国教育信息化前景及自己未来的职业发展有什么想法？（可多选）",
                "images": [],
                "choices": [
                    {
                        "id": "A",
                        "content": "我坚信我国将借助信息化实现教育的“弯道超车”",
                        "images": []
                    },
                    {
                        "id": "B",
                        "content": "我坚信我在信息化教学方面的优势将让我成为教育行业的佼佼者和领导者",
                        "images": []
                    },
                    {
                        "id": "C",
                        "content": "我要成为扎根基层、无私奉献的好老师",
                        "images": []
                    },
                    {
                        "id": "D",
                        "content": "我认为教育信息化对我国教育现代化的促进作用不大",
                        "images": []
                    },
                    {
                        "id": "E",
                        "content": "如果条件许可，我还是希望转为非师范生",
                        "images": []
                    }
                ],
                "type": "1",
                "require": false
            }
        ]
    },
    {
        "name": '数学',
        "subjectCode":'M',

        "questions": [
            {
                "id": 1,
                "section": "P",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "title": "1+11",
                "content": "1+11",
                "images": [],
                "choices": [

                ],
                "type": "2",
                "require": false
            },
            {
                "id": 2,
                "section": "J",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "title": "2",
                "content": "22*5",
                "images": [],
                "choices": [

                ],
                "type": "2",
                "require": true
            },
            {
                "id": 3,
                "section": "S",// 小学（primary） P 中学（junior）J 高中（sunior） S
                "title": "3",
                "content": "99*99",
                "images": [],
                "choices": [

                ],
                "type": "2",
                "require": true
            },

        ]
    },
]
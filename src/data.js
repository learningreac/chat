export let data= {
    "persons": [
        {
            "name": "Josh",
            "id": 0,
            "friends": [
                {
                    "name": "Betty",
                    "id": 1
                },
                {
                    "name": "Mike",
                    "id": 2
                },
                {
                    "name": "Pebbles",
                    "id": 3
                },
                {
                    "name": "Wilma",
                    "id": 4
                }
            ],
            "is_online": true
        },
        {
            "name": "Betty",
            "id": 1,
            "css_map": {
                "top": 20,
                "left": 20,
                "background-color": "rgb( 128,128,128)"
            },
            "friends": [
                {
                    "name": "Josh",
                    "id": 0
                },
                {
                    "name": "Mike",
                    "id": 2
                },
                {
                    "name": "Pebbles",
                    "id": 3
                }
            ],
            "is_online": true
        },
        {
            "name": "Mike",
            "id": 2,
            "css_map": {
                "top": 60,
                "left": 20,
                "background-color": "rgb( 128,255,128)"
            },
            "friends": [
                {
                    "name": "Josh",
                    "id": 0
                },
                {
                    "name": "Betty",
                    "id": 1
                }
            ],
            "is_online": true
        },
        {
            "name": "Pebbles",
            "id": 3,
            "css_map": {
                "top": 100,
                "left": 20,
                "background-color": "rgb( 128,192,192)"
            },
            "friends": [
                {
                    "name": "Josh",
                    "id": 0
                },
                {
                    "name": "Betty",
                    "id": 1
                },
                {
                    "name": "Wilma",
                    "id": 4
                }
            ],
            "is_online": false
        },
        {
            "name": "Wilma",
            "id": 4,
            "css_map": {
                "top": 140,
                "left": 20,
                "background-color": "rgb( 192,128,128)"
            },
            "friends": [
                {
                    "name": "Josh",
                    "id": 0
                },
                {
                    "name": "Pebbles",
                    "id": 3
                }
            ],
            "is_online": false
        }
    ],
    "messages": [
        {
            "msgID": 5111,
            "content": "hello Betty",
            "creatorID": 0,
            "recipientID": 1,
            "timestamp": "2017/04/12*19:37:50"
        },
        {
            "msgID": 5112,
            "content": "Hello!",
            "creatorID": 1,
            "recipientID": 0,
            "timestamp": "2017/04/12*19:37:50"
        },
        {
            "msgID": 5113,
            "content": "Have a great day!",
            "creatorID": 0,
            "recipientID": 3,
            "timestamp": "2017/04/12*19:37:50"
        }
    ]
};


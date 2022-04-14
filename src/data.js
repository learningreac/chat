export let data= {
    "persons": [
        {
            "name": "Josh",
            "id": "56783",
            "friends": [
                {
                    "name": "Betty",
                    "id": "89657"
                },
                {
                    "name": "Mike",
                    "id": "12458"
                },
                {
                    "name": "Pebbles",
                    "id": "66531"
                },
                {
                    "name": "Wilma",
                    "id": "74963"
                }
            ],
            "is_online": true
        },
        {
            "name": "Betty",
            "id": "89657",
            "friends": [
                {
                    "name": "Josh",
                    "id": "56783",
                },
                {
                    "name": "Mike",
                    "id": "12458"
                },
                {
                    "name": "Pebbles",
                    "id": "66531"
                }
            ],
            "is_online": true
        },
        {
            "name": "Mike",
            "id": "12458",
            "friends": [
                {
                    "name": "Josh",
                    "id": "56783",
                },
                {
                    "name": "Betty",
                    "id": "89657"
                }
            ],
            "is_online": true
        },
        {
            "name": "Pebbles",
            "id": "66531",
            "friends": [
                {
                    "name": "Josh",
                    "id": "56783",
                },
                {
                    "name": "Betty",
                    "id": "89657"
                },
                {
                    "name": "Wilma",
                    "id": "74963"
                }
            ],
            "is_online": false
        },
        {
            "name": "Wilma",
            "id": "74963",
            "friends": [
                {
                    "name": "Josh",
                    "id": "56783",
                },
                {
                    "name": "Pebbles",
                    "id": "66531"
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


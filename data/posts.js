import { USERS } from "./users";
export const POSTS = [
    {
        imageurl: 'https://i.hizliresim.com/n65beil.jpg',
        user: USERS[0].user,
        likes: 7870,
        caption: 'I cant wait the new game of this series.',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: '@gamer005',
                comment: 'Wow! This game looks amazing. So excited!'
            },
            {
                user: '@gamer002',
                comment: 'I will definitely check out this game!'
            },
        ],
    },
    {
        imageurl: 'https://i.hizliresim.com/biovj9p.png',
        user: USERS[1].user,
        likes: 3822,
        caption: 'Check this screenshot!',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: '@gamer003',
                comment: 'Wow! Looks Fire!'
            },
            {
                user: '@gamer004',
                comment: 'Is this game live on Cosmos?'
            },
        ],
    },
]
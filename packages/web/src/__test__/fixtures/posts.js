import { profileImage } from './images';
import { BASE_URL_POSTS, BASE_URL_PROFILES } from './constants';

const posts = Array.from(Array(13), (_, idx) => ({
  id: `${1000 + idx}`,
  imageURL: `${BASE_URL_POSTS}/cat_00${10 + idx}.jpg`,
  postURL: `posturl_${idx}`,
  content: `this is a test post ${idx}.`,
  isLike: idx % 2 === 0,
  updatedAt: `${1597742670000 + 1000 * idx}`,
  writer: {
    id: `${100 + idx}`,
    username: `__tester_${idx}`,
    profileImage: `${BASE_URL_PROFILES}/profile_00${10 + idx}.jpg`,
  },
  commentCount: 3,
  commentList: [
    {
      id: `${10000 + idx}`,
      content: '#short This is a short text. ',
      writer: { username: 'commeter1' },
    },
    {
      id: `${20000 + idx}`,
      content:
        '#long Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum at eligendi beatae est repellat repellendus modi nihil adipisci maiores, autem, odit rem cupiditate ipsam suscipit numquam officiis minima! Provident, itaque?',
      writer: { username: 'commeter2' },
    },
  ],
  likerInfo: {
    likerCount: 1,
    username: 'liker1',
    profileImage,
  },
}));

export default posts;

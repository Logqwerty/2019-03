import { FOLLOW_STATUS } from '../../constants';

export const rawLikers = [
  {
    id: '14',
    username: '_z1ljais6x',
    name: '형진정',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0012.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241746000',
  },
  {
    id: '12',
    username: '_d6lbwl6l2',
    name: '호형전',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0010.jpg',
    isFollow: FOLLOW_STATUS.none,
    likedAt: '1602241745000',
  },
  {
    id: '13',
    username: '_b313yb29l',
    name: '정재현',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0011.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241745000',
  },
  {
    id: '11',
    username: '_0iatwf5rn',
    name: '전형소',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0009.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241744000',
  },
  {
    id: '10',
    username: '_2w9jh9szy',
    name: '소영전',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0008.jpg',
    isFollow: FOLLOW_STATUS.none,
    likedAt: '1602241743000',
  },
  {
    id: '9',
    username: '_rrcxz9uz0',
    name: '정호영',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0007.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241544000',
  },
  {
    id: '8',
    username: '_z9a3i8pi0',
    name: '전형진',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0006.jpg',
    isFollow: FOLLOW_STATUS.none,
    likedAt: '1602241542000',
  },
  {
    id: '7',
    username: '_a2ihs0bwn',
    name: '남전형',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0005.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241540000',
  },
  {
    id: '6',
    username: '_2x0yz9jdo',
    name: '전재현',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0004.jpg',
    isFollow: FOLLOW_STATUS.none,
    likedAt: '1602241537000',
  },
  {
    id: '5',
    username: '_ihyk2lexv',
    name: '재정남',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0003.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241535000',
  },
  {
    id: '4',
    username: '_a9cqiutmv',
    name: '남형영',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0002.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241533000',
  },
  {
    id: '3',
    username: '_wuqjm13xr',
    name: '정재전',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0001.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241531000',
  },
  {
    id: '2',
    username: '_16na5q086',
    name: '김전진',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0000.jpg',
    isFollow: FOLLOW_STATUS.following,
    likedAt: '1602241515000',
  },
  {
    id: '1',
    username: 'tester1',
    name: '테스터',
    profileImage:
      'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles/profile_0800.jpg',
    isFollow: FOLLOW_STATUS.none,
    likedAt: '1602225124000',
  },
];

export const likers = rawLikers.map(({ id, isFollow, ...others }) => ({
  myId: '1',
  userId: id,
  followStatus: isFollow,
  ...others,
}));

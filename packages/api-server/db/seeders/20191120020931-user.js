const S3_URL =
  'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/profiles';

const addPrefixZero = (num, maxLength = 4) => {
  const digits = [...num.toString()];
  let iter = maxLength - digits.length;
  while (iter > 0) {
    iter -= 1;
    digits.unshift('0');
  }
  return digits.join('');
};

module.exports = {
  up: queryInterface => {
    const userInfo = [
      {
        username: 'tester1',
        password: 'test123A!',
        email: 'hana@gmail.com',
        name: '테스터',
        cellPhone: '000-0000-0000',
        profileImage: `${S3_URL}/profile_0800.jpg`,
        isPrivate: 0,
        isFacebook: 0,
        isDeveloper: 0,
        updatedAt: new Date(),
      },
    ];

    const korean = [
      '남',
      '정',
      '호',
      '정',
      '소',
      '영',
      '김',
      '재',
      '현',
      '전',
      '형',
      '진',
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      userInfo.push({
        username: `_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        password: `_${Math.random()
          .toString(36)
          .substr(2, 11)}`,
        email: 'hana@gmail.com',
        name: `${korean[Math.floor(Math.random() * korean.length)]}${
          korean[Math.floor(Math.random() * korean.length)]
        }${korean[Math.floor(Math.random() * korean.length)]}`,
        cellPhone: '000-0000-0000',
        profileImage: `${S3_URL}/profile_${addPrefixZero(i)}.jpg`,
        isPrivate: 0,
        isFacebook: 0,
        isDeveloper: 0,
        updatedAt: new Date(new Date().getTime() + 1000 * (i + 1)),
      });
    }
    return queryInterface.bulkInsert('Users', userInfo, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Users', {});
  },
};

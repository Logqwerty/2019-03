const S3_URL = 'https://youngstar-storage.s3.ap-northeast-2.amazonaws.com/post';
const CAT_MAX_COUNT = 885;

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
    const postList = [];
    for (let i = 0; i <= 1500; i += 1) {
      const postfix = i >= CAT_MAX_COUNT ? i - CAT_MAX_COUNT : i;
      const prefix = i >= CAT_MAX_COUNT ? 'dog' : 'cat';
      postList.push({
        imageURL: `${S3_URL}/${prefix}_${addPrefixZero(postfix)}.jpg`,
        postURL: `${Math.random()
          .toString(36)
          .substr(2, 6)}`,
        content: `${Math.random()
          .toString(36)
          .substr(2, 30)}`,
        UserId: (i % 100) + 1,
        updatedAt: new Date(new Date().getTime() + 1000 * i),
      });
    }
    return queryInterface.bulkInsert('Posts', postList, {});
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('Posts', {});
  },
};

const IS_DEV = process.env.NODE_ENV === 'development';

const BASIC_PREFIX = IS_DEV ? 'http://localhost:3008/splider' : 'https://www.chensai.club/splider';

export {
  BASIC_PREFIX,
};

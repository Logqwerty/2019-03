export const DEFAULT_UNIT = 3;
export const DEFAULT_FONT_SIZE = 14;
export const DEFAULT_FONT_WEIGHT = 600;

export const DEFAULT_SPINNER_SIZE = '32px';
export const DEFAULT_SPINNER_WIDTH = '5px';

export const FLEX_DIRECTION = Object.freeze({
  row: 'row',
  col: 'column',
});

export const FLEX_ALIGN = Object.freeze({
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  evenly: 'space-evenly',
});

export const BUTTON_TYPES = Object.freeze({
  button: 'button',
  reset: 'reset',
  submit: 'submit',
});

export const POST_WIDTH = 615;
export const POST_IMAGE_HEIGHT = 615;
export const POST_SPACE_VERTICAL = 16;
export const POST_SPACE_HORIZONTAL = 16;

export const PROFILE_LENGTH = 32;
export const PROFILE_MAX_RATIO = 10;

export const MODAL_MENU_POSITION = Object.freeze({
  top: 'top',
  middle: 'middle',
  bottom: 'bottom',
});

export const FOLLOW_STATUS = Object.freeze({
  following: 1,
  none: 0,
});

export const FOLLOW_STATUS_TEXT = Object.freeze({
  [FOLLOW_STATUS.none]: '팔로우',
  [FOLLOW_STATUS.following]: '팔로잉',
});

export const ICON_IMAGE_LENGTH = 1000;
export const ICON_LENGTH = 125;
export const ICON_LOGO_WIDTH = 1000;
export const ICON_LOGO_HEIGHT = 158;

export const ICON_MAX_RATIO = 10;

export const ICON_TYPES = Object.freeze({
  logo: 'logo',
  emptyHeart: 'emptyHeart',
  fullHeart: 'fullHeart',
  newPost: 'newPost',
  directMessage: 'directMessage',
  search: 'search',
  comment: 'comment',
  favicon: 'favicon',
  ellipsis: 'ellipsis',
  clear: 'clear',
  logout: 'logout',
  hashtag: 'hashtag',
  cancel: 'cancel',
});

export const ICON_POSITIONS = Object.freeze({
  logo: {
    x: 0,
    y: 0,
  },
  emptyHeart: {
    x: -130,
    y: -246,
  },
  fullHeart: {
    x: -130,
    y: -376,
  },
  newPost: {
    x: -260,
    y: -248,
  },
  directMessage: {
    x: -130,
    y: -504,
  },
  search: {
    x: -260,
    y: -631,
  },
  comment: {
    x: -520,
    y: -248,
  },
  favicon: {
    x: 0,
    y: -505,
  },
  ellipsis: {
    x: -261,
    y: -504,
  },
  clear: {
    x: -390,
    y: -631,
  },
  logout: {
    x: 0,
    y: -248,
  },
  hashtag: {
    x: -130,
    y: -634,
  },
  cancel: {
    x: -523,
    y: -627,
  },
});

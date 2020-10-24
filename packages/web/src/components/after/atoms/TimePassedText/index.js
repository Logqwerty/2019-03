import React from 'react';
import PropTypes from 'prop-types';

import { TIME_TYPE, TIME_UNIT } from '@const';
import { StyledSpan } from './styles';

const propTypes = {
  updatedAt: PropTypes.string.isRequired,
};

const calcTimeDiff = (fromDate, toDate) => {
  const diff = toDate - fromDate;
  if (diff < TIME_UNIT.sec) return { type: TIME_TYPE.now, diff: 0 };
  if (diff < TIME_UNIT.min)
    return { type: TIME_TYPE.sec, diff: Math.floor(diff / TIME_UNIT.sec) };
  if (diff < TIME_UNIT.hour)
    return { type: TIME_TYPE.min, diff: Math.floor(diff / TIME_UNIT.min) };
  if (diff < TIME_UNIT.day)
    return { type: TIME_TYPE.hour, diff: Math.floor(diff / TIME_UNIT.hour) };
  if (diff < TIME_UNIT.week)
    return { type: TIME_TYPE.day, diff: Math.floor(diff / TIME_UNIT.day) };
  return { type: TIME_TYPE.week, diff: Math.floor(diff / TIME_UNIT.week) };
};

const convertTimeDiffToText = ({ type, diff }) => {
  switch (type) {
    case TIME_TYPE.now:
      return `지금`;
    case TIME_TYPE.sec:
      return `${diff}초 전`;
    case TIME_TYPE.min:
      return `${diff}분 전`;
    case TIME_TYPE.hour:
      return `${diff}시간 전`;
    case TIME_TYPE.day:
      return `${diff}일 전`;
    default:
      return `${diff}주 전`;
  }
};

const TimePassedText = ({ updatedAt, className }) => {
  const dateDiff = calcTimeDiff(+updatedAt, Date.now());
  const dateDiffText = convertTimeDiffToText(dateDiff);
  return <StyledSpan className={className}>{dateDiffText}</StyledSpan>;
};

TimePassedText.propTypes = propTypes;

export default TimePassedText;

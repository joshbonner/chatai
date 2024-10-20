/* eslint-disable react-native/no-inline-styles */
import { ms } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg';
import * as React from 'react';

const LeftChevron = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{ enableBackground: 'new 0 0 492 492' }}
    viewBox="0 0 492 492"
    width={ms(15)}
    height={ms(15)}
    {...props}>
    <Path
      fill="currentColor"
      d="M198.608 246.104 382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"
    />
  </Svg>
);
export default LeftChevron;

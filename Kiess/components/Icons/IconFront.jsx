import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const IconFront = (props) => {
  return (
    <Svg
      width={16}
      height={26}
      viewBox="0 0 16 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
        <Path
          d="M16 12.9998C16 12.1918 15.6808 11.4144 15.1109 10.8427L5.19022 0.891631C4.00475 -0.297464 2.07837 -0.297464 0.892904 0.891631C-0.292562 2.08073 -0.292562 4.013 0.892903 5.2021L8.66303 12.996L0.892902 20.7899C-0.292564 21.979 -0.292564 23.9113 0.892901 25.1004C1.48563 25.6949 2.26455 25.9922 3.04346 25.9922C3.82237 25.9922 4.59748 25.6949 5.19402 25.1004L15.1109 15.1569C15.6808 14.5853 16 13.8078 16 12.9998Z"
          fill={props.fill || "#343434"} // Default fill color
        />
    </Svg>
  );
};

export default IconFront;


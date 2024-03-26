import * as React from 'react';
import Svg, { G, Path, ClipPath, Defs, Rect } from 'react-native-svg';

const IconBack = (props) => {
  return (
    <Svg
      width={16}
      height={26}
      viewBox="0 0 16 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_875_259)">
        <Path
          d="M0 13C0 13.808 0.319164 14.5855 0.8891 15.1571L10.8098 25.1082C11.9952 26.2973 13.9216 26.2973 15.1071 25.1082C16.2926 23.9191 16.2926 21.9868 15.1071 20.7977L7.33697 13.0038L15.1071 5.20992C16.2926 4.02082 16.2926 2.08854 15.1071 0.89945C14.5144 0.304903 13.7355 0.00762939 12.9565 0.00762939C12.1776 0.00762939 11.4025 0.304903 10.806 0.89945L0.8891 10.8429C0.319164 11.4145 0 12.192 0 13Z"
          fill={props.fill || "#333333"} // Default fill color
        />
      </G>
      <Defs>
        <ClipPath id="clip0_875_259">
          <Rect width="16" height="26" fill="white"/>
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default IconBack;

// IconProfil.js
import * as React from 'react';
import Svg, { G, Path, ClipPath, Defs, Rect } from 'react-native-svg';

const IconProfil = (props) => {
  return (
    <Svg width={22} height={27} viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G clipPath="url(#clip0_1_977)">
        <Path
          d="M16.5894 12.8896C14.9913 14.185 12.9379 14.932 10.7253 14.932C8.51257 14.932 6.43632 14.185 4.83929 12.8896C2.10038 15.1737 0.206411 19.0609 4.63908e-05 23.5406C-0.022883 24.0901 0.341694 24.5944 0.888559 24.7709C2.41795 25.2321 5.81723 26.0883 10.723 26.0883C15.6287 26.0883 19.0291 25.2321 20.5574 24.7709C21.1054 24.5955 21.4711 24.0901 21.4241 23.5406C21.2189 19.0609 19.3249 15.1737 16.5883 12.8908L16.5894 12.8896Z"
          fill={props.fill}
        />
        <Path
          d="M10.7149 12.0876C14.1829 12.0876 16.9952 9.38208 16.9952 6.04434C16.9952 2.7066 14.1841 0 10.7149 0C7.24566 0 4.43567 2.7055 4.43567 6.04324C4.43567 9.38098 7.24681 12.0865 10.7149 12.0865V12.0876Z"
          fill={props.fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_977">
          <Rect width={21.43} height={26.088} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default IconProfil;

import * as React from 'react';
import Svg, { G, Path, ClipPath, Defs, Rect } from 'react-native-svg';

const IconsDecouverte = (props) => {
  return (
    <Svg
      width={19}
      height={17}
      viewBox="0 0 19 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_4416)">
        <Path
          d="M9.552 2.991c.149-.185 2.18-2.682 4.818-2.233 2.04.343 3.244 2.242 3.64 3.209 1.293 3.147-1.238 7.06-6.233 11.473-1.275 1.126-3.262 1.126-4.537 0C2.272 11.044-.19 7.176 1.094 4.028c.395-.967 1.6-2.98 3.64-3.323 2.638-.448 4.668 2.102 4.818 2.286z"
          stroke="#FC2D3D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_4416">
          <Rect
            width={18.4625}
            height={16.5107}
            fill="white"
            transform="translate(0.321 0.213)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default IconsDecouverte;

import * as React from 'react';
import Svg, { G, Path, ClipPath, Defs, Rect } from 'react-native-svg';

const AmiFamilleSvg = (props) => {
  return (
    <Svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_4411)">
        <Path
          d="M9.1 16.884L8.603 9.901l-6.982-.497C0.267 9.254 0.005 7.399 1.264 6.882L15.957.83c1.08-.446 2.163.637 1.718 1.718L11.625 17.24c-.518 1.259-2.373.997-2.523-1.355H9.1z"
          stroke="#FC2D3D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_4411">
          <Rect
            width={17.5833}
            height={17.5833}
            fill="white"
            transform="translate(0.321 0.6)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default AmiFamilleSvg;

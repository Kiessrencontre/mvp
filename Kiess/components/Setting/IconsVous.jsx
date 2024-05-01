import * as React from 'react';
import Svg, { G, Path, ClipPath, Defs, Rect } from 'react-native-svg';

const IconsVous = (props) => {
  return (
    <Svg
      width={15}
      height={19}
      viewBox="0 0 15 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_4418)">
        <Path
          d="M7.552 7.453c1.784 0 3.23-1.453 3.23-3.246 0-1.793-1.446-3.246-3.23-3.246-1.784 0-3.23 1.453-3.23 3.246 0 1.793 1.446 3.246 3.23 3.246Z"
          stroke="#FC2D3D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M5.399 10.699h4.306c2.376 0 4.306 1.94 4.306 4.328v1.082c0 1.196-.964 2.164-2.153 2.164H3.246c-1.19 0-2.153-.968-2.153-2.164v-1.082c0-2.388 1.93-4.328 4.306-4.328Z"
          stroke="#FC2D3D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_4418">
          <Rect
            width="13.188"
            height="17.583"
            fill="white"
            transform="translate(0.958 0.825)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default IconsVous;

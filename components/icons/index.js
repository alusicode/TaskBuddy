import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Circle,
  Path,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
export const AddBtn = (props) => {
  return (
    <Svg width={53} height={50} {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={0.23}
          y1={0.126}
          x2={0.834}
          y2={0.93}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#f857c3" />
          <Stop offset={1} stopColor="#e0139c" />
        </LinearGradient>
      </Defs>
      <G transform="translate(-153 -709)">
        <Circle
          data-name="Ellipse 8"
          cx={26.5}
          cy={26.5}
          r={26.5}
          transform="translate(153 709)"
          fill="url(#prefix__a)"
        />
        <G data-name="Group 15">
          <G data-name="Group 14">
            <Path
              data-name="Path 77"
              d="M179.715 723.309a1 1 0 00-1 1v22.81a1 1 0 102 0v-22.81a1 1 0 00-1-1z"
              fill="#fff"
              stroke="#fff"
              strokeWidth={3}
            />
          </G>
        </G>
        <G data-name="Group 17">
          <G data-name="Group 16">
            <Path
              data-name="Path 78"
              d="M191.119 734.713h-22.81a1 1 0 100 2h22.81a1 1 0 100-2z"
              fill="#fff"
              stroke="#fff"
              strokeWidth={3}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const Home = (props) => {
  return (
    <Svg width={22} height={24.227} viewBox="0 0 22 24.227" {...props}>
      <G data-name="home">
        <G data-name="Group 31">
          <G data-name="Group 30">
            <Path
              data-name="Path 85"
              d="M21.622 7.999L11.601.206a.979.979 0 00-1.2 0L.378 7.999A.979.979 0 000 8.771v12.25a3.209 3.209 0 003.206 3.206h15.588A3.209 3.209 0 0022 21.021V8.773a.979.979 0 00-.378-.774zm-1.579 13.022a1.25 1.25 0 01-1.248 1.248H3.206a1.25 1.25 0 01-1.248-1.248V9.251l9.043-7.033 9.043 7.033z"
              fill={props.focused ? "#5f87e7" : "#707070"}
            />
          </G>
        </G>
        <G data-name="Group 33">
          <G data-name="Group 32">
            <Path
              data-name="Path 86"
              d="M14.598 10.127H7.403a1.054 1.054 0 00-1.054 1.054v11.991a1.054 1.054 0 102.108 0V12.235h5.087v10.937a1.054 1.054 0 102.108 0V11.181a1.054 1.054 0 00-1.054-1.054z"
              fill={props.focused ? "#5f87e7" : "#707070"}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export const Tasks = (props) => {
  return (
    <Svg width={22} height={22} viewBox="0 0 22 22" {...props}>
      <G data-name="grid">
        <G data-name="Group 23">
          <G data-name="Group 22">
            <Path
              data-name="Path 81"
              d="M7.752 0H2.044A2.047 2.047 0 000 2.044v5.708A2.047 2.047 0 002.044 9.8h5.708A2.047 2.047 0 009.8 7.752V2.044A2.047 2.047 0 007.752 0zm.239 7.752a.239.239 0 01-.239.239H2.044a.239.239 0 01-.239-.239V2.044a.239.239 0 01.239-.239h5.708a.239.239 0 01.239.239z"
              fill={props.focused ? "#5f87e7" : "#707070"}
            />
          </G>
        </G>
        <G data-name="Group 25">
          <G data-name="Group 24">
            <Path
              data-name="Path 82"
              d="M19.955 0h-5.708a2.047 2.047 0 00-2.044 2.044v5.708A2.047 2.047 0 0014.247 9.8h5.708a2.047 2.047 0 002.044-2.045V2.044A2.047 2.047 0 0019.955 0zm.239 7.752a.239.239 0 01-.239.239h-5.708a.239.239 0 01-.239-.239V2.044a.239.239 0 01.239-.239h5.708a.239.239 0 01.239.239z"
              fill={props.focused ? "#5f87e7" : "#707070"}
            />
          </G>
        </G>
        <G data-name="Group 27">
          <G data-name="Group 26">
            <Path
              data-name="Path 83"
              d="M19.955 12.203h-5.708a2.047 2.047 0 00-2.044 2.044v5.708a2.047 2.047 0 002.044 2.044h5.708a2.047 2.047 0 002.044-2.044v-5.708a2.047 2.047 0 00-2.044-2.044zm.239 7.752a.239.239 0 01-.239.239h-5.708a.239.239 0 01-.239-.239v-5.708a.239.239 0 01.239-.239h5.708a.239.239 0 01.239.239z"
              fill={props.focused ? "#5f87e7" : "#707070"}
            />
          </G>
        </G>
        <G data-name="Group 29">
          <G data-name="Group 28">
            <Path
              data-name="Path 84"
              d="M7.752 12.203H2.044A2.047 2.047 0 000 14.247v5.708a2.047 2.047 0 002.044 2.044h5.708A2.047 2.047 0 009.8 19.955v-5.708a2.047 2.047 0 00-2.048-2.044zm.239 7.752a.239.239 0 01-.239.239H2.044a.239.239 0 01-.239-.239v-5.708a.239.239 0 01.239-.239h5.708a.239.239 0 01.239.239z"
              fill={props.focused ? "#5f87e7" : "#707070"}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
// ==================================================================
export const Personal = (props) => {
  return (
    <Svg width={50} height={40} viewBox="0 0 28.221 33.825" {...props}>
      <Path
        data-name="Path 103"
        d="M22.044 8.147a7.884 7.884 0 01-2.387 5.761 7.883 7.883 0 01-5.761 2.387 7.885 7.885 0 01-5.756-2.387 7.883 7.883 0 01-2.387-5.761 7.882 7.882 0 012.387-5.76A7.881 7.881 0 0113.893 0a7.886 7.886 0 015.761 2.387 7.883 7.883 0 012.39 5.76zm0 0"
        fill="#f9c229"
      />
      <Path
        data-name="Path 104"
        d="M28.221 28.008a5.615 5.615 0 01-1.668 4.249 6 6 0 01-4.3 1.568H5.967a6 6 0 01-4.3-1.568A5.615 5.615 0 010 28.008c0-.679.022-1.351.067-2a20 20 0 01.274-2.138 16.87 16.87 0 01.525-2.148 10.656 10.656 0 01.883-2 7.588 7.588 0 011.332-1.736A5.874 5.874 0 015 16.781a6.617 6.617 0 012.443-.442 2.475 2.475 0 011.323.561c.4.263.868.562 1.38.89a7.88 7.88 0 001.784.786 7.112 7.112 0 001.966.349h.216a7.094 7.094 0 002.183-.353 7.879 7.879 0 001.785-.786c.518-.331.983-.63 1.38-.889a2.473 2.473 0 011.324-.562 6.62 6.62 0 012.443.442 5.88 5.88 0 011.914 1.2 7.56 7.56 0 011.332 1.736 10.618 10.618 0 01.883 2 16.857 16.857 0 01.526 2.149 20.184 20.184 0 01.274 2.137c.046.644.068 1.316.069 2zm0 0"
        fill="#f9c229"
      />
    </Svg>
  );
};

export const Work = (props) => {
  return (
    <Svg width={50} height={40} viewBox="0 0 28.611 25.86" {...props}>
      <G fill="#1ed102">
        <Path
          data-name="Path 105"
          d="M25.559 15.008a3.568 3.568 0 01-2.426.948h-5.8v.825a2.479 2.479 0 01-2.476 2.476h-1.1a2.479 2.479 0 01-2.476-2.476v-.825h-4.9a3.559 3.559 0 01-2.062-.654L.001 12.243v7.563h2.2a4.131 4.131 0 014.127 4.127v1.926h15.956v-1.926a4.131 4.131 0 014.127-4.127h2.2v-7.693L25.566 15l-.008.008zm0 0"
        />
        <Path
          data-name="Path 106"
          d="M14.856 17.607a.826.826 0 00.825-.825v-3.3a.826.826 0 00-.825-.825h-1.1a.826.826 0 00-.825.825v3.3a.826.826 0 00.825.825zm0 0"
        />
        <Path
          data-name="Path 107"
          d="M26.136 6.6h-3.994l-1.306-4.96A2.2 2.2 0 0018.708 0H9.901a2.2 2.2 0 00-2.125 1.64L6.47 6.6H2.477A2.479 2.479 0 00.001 9.078v1.144l5.267 3.732a1.914 1.914 0 001.109.351h4.9v-.825A2.479 2.479 0 0113.756 11h1.1a2.479 2.479 0 012.476 2.476v.825h5.8a1.92 1.92 0 001.3-.507l4.158-3.943.018-.015v-.758A2.479 2.479 0 0026.136 6.6zm-15.114 0l.579-2.2h5.41l.579 2.2zm0 0"
        />
        <Path
          data-name="Path 108"
          d="M23.935 23.934v1.924h2.2a2.479 2.479 0 002.476-2.476v-1.924h-2.2a2.479 2.479 0 00-2.476 2.476zm0 0"
        />
        <Path
          data-name="Path 109"
          d="M2.2 21.458H0v1.926a2.479 2.479 0 002.476 2.474h2.2v-1.926A2.479 2.479 0 002.2 21.458zm0 0"
        />
      </G>
    </Svg>
  );
};

export const Party = (props) => {
  return (
    <Svg width={50} height={40} viewBox="0 0 30.052 30.052" {...props}>
      <G fill="#09acce">
        <Path
          data-name="Path 112"
          d="M8.723 8.803a2.6 2.6 0 00-3.678 0l-.356.356a2.6 2.6 0 00-.191 3.464l-.893 2.763 11.06 11.06 2.763-.893a2.6 2.6 0 003.464-.191l.357-.357a2.6 2.6 0 000-3.678zm0 0"
        />
        <Path
          data-name="Path 113"
          d="M.148 26.088a3.019 3.019 0 00.741 3.075 3.054 3.054 0 003.075.741l4.6-1.487-6.932-6.932zm0 0"
        />
        <Path
          data-name="Path 114"
          d="M2.233 19.629l8.187 8.187 2.392-.773-9.806-9.806zm0 0"
        />
        <Path
          data-name="Path 115"
          d="M16.946 13.504a.864.864 0 00.613-.254 3.24 3.24 0 011.181-.8 5.45 5.45 0 002.861-2.861 3.717 3.717 0 011.975-1.976 4.9 4.9 0 001.706-1.155.867.867 0 10-1.226-1.226 3.239 3.239 0 01-1.18.795 5.447 5.447 0 00-2.86 2.861 3.719 3.719 0 01-1.976 1.976 4.9 4.9 0 00-1.706 1.155.867.867 0 00.613 1.48zm0 0"
        />
        <Path
          data-name="Path 116"
          d="M11.771 7.817a.867.867 0 001.734 0 1.188 1.188 0 01.217-.728 2.881 2.881 0 00.445-1.588 2.881 2.881 0 00-.445-1.588 1.331 1.331 0 010-1.456 2.881 2.881 0 00.445-1.588.867.867 0 10-1.734 0 1.189 1.189 0 01-.217.728 2.879 2.879 0 00-.445 1.588 2.879 2.879 0 00.445 1.588 1.332 1.332 0 010 1.456 2.881 2.881 0 00-.445 1.589zm0 0"
        />
        <Path
          data-name="Path 117"
          d="M29.185 16.545a1.188 1.188 0 01-.728-.217 3.057 3.057 0 00-3.177 0 1.332 1.332 0 01-1.457 0 2.88 2.88 0 00-1.588-.445.867.867 0 100 1.734 1.188 1.188 0 01.728.217 3.057 3.057 0 003.177 0 1.331 1.331 0 011.456 0 2.881 2.881 0 001.588.445.867.867 0 100-1.734zm0 0"
        />
        <Path
          data-name="Path 118"
          d="M17.648 3.913h1.872a.867.867 0 100-1.734h-1.872a.867.867 0 100 1.734zm0 0"
        />
        <Path
          data-name="Path 119"
          d="M17.18 8.122a.867.867 0 00.867-.867v-.936a.867.867 0 00-1.734 0v.936a.867.867 0 00.867.867zm0 0"
        />
        <Path
          data-name="Path 120"
          d="M27.009 13.269a.867.867 0 00.867-.867V10.53a.867.867 0 00-1.734 0v1.872a.867.867 0 00.867.867zm0 0"
        />
        <Path
          data-name="Path 121"
          d="M22.794 12.004a.867.867 0 000 1.734h.936a.867.867 0 100-1.734zm0 0"
        />
      </G>
    </Svg>
  );
};

export const Shopping = (props) => {
  return (
    <Svg width={50} height={40} viewBox="0 0 30.696 25.383" {...props}>
      <G fill="#ec6c0b">
        <Path
          data-name="Path 110"
          d="M16.234 16.234v4.722a.885.885 0 01-1.771 0v-4.722a.886.886 0 01.885-.885H4.098l.764 7.643a2.648 2.648 0 002.643 2.392h15.686a2.648 2.648 0 002.643-2.392l.764-7.642h-11.25a.886.886 0 01.885.885zm-5.391 5.581a.884.884 0 01-1.074-.644L8.586 16.45a.885.885 0 111.718-.429l1.181 4.722a.885.885 0 01-.644 1.074zm8.371-1.074l1.181-4.722a.885.885 0 111.718.429l-1.181 4.723a.885.885 0 11-1.718-.43zm0 0"
        />
        <Path
          data-name="Path 111"
          d="M27.45 7.083H24.3l-1.274-5.111a2.604 2.604 0 10-5.052 1.263l.962 3.849H11.76l.962-3.849A2.604 2.604 0 107.67 1.972L6.393 7.083H3.247a3.247 3.247 0 000 6.493h24.2a3.247 3.247 0 000-6.493zm0 0"
        />
      </G>
    </Svg>
  );
};

export const Study = (props) => {
  return (
    <Svg width={50} height={40} viewBox="0 0 28.112 28.112" {...props}>
      <Path
        data-name="Path 122"
        d="M5.812 8.65a2.838 2.838 0 10-2.838-2.838A2.841 2.841 0 005.812 8.65zm0 0"
        fill="#bf0080"
      />
      <Path
        data-name="Path 123"
        d="M22.301 19.462a2.838 2.838 0 102.838 2.838 2.841 2.841 0 00-2.838-2.838zm0 0"
        fill="#bf0080"
      />
      <Path
        data-name="Path 124"
        d="M23.246 11.624a2.437 2.437 0 00-2.293 1.622h-2.929a4.032 4.032 0 00-.592-1.423l3.918-3.918a5.324 5.324 0 01-1.147-1.147l-3.918 3.918a4.032 4.032 0 00-1.423-.592V7.159a2.433 2.433 0 10-1.622 0v2.924a4.029 4.029 0 00-1.423.592L9.484 8.338a4.5 4.5 0 01-1.147 1.147l2.338 2.339a4.028 4.028 0 00-.592 1.423H7.159a2.433 2.433 0 100 1.622h2.924a4.032 4.032 0 00.592 1.423L6.757 20.21a5.324 5.324 0 011.147 1.147l3.92-3.92a4.032 4.032 0 001.423.592v2.924a2.433 2.433 0 101.622 0v-2.929a4.029 4.029 0 001.423-.592l2.332 2.342a4.5 4.5 0 011.15-1.15l-2.337-2.337a4.028 4.028 0 00.592-1.423h2.924a2.433 2.433 0 102.293-3.24zm0 0"
        fill="#bf0080"
      />
      <Path
        data-name="Path 125"
        d="M3.649 20.814A3.649 3.649 0 107.3 24.463a3.653 3.653 0 00-3.651-3.649zm0 0"
        fill="#bf0080"
      />
      <Path
        data-name="Path 126"
        d="M24.463 0a3.649 3.649 0 103.649 3.649A3.653 3.653 0 0024.463 0zm0 0"
        fill="#bf0080"
      />
    </Svg>
  );
};

export const Meeting = (props) => {
  return (
    <Svg width={50} height={40} viewBox="0 0 29.324 35.461" {...props}>
      <Path
        data-name="presentation (1)"
        d="M26.255 4.092h-6.479V3.069A3.072 3.072 0 0016.707 0h-4.091a3.072 3.072 0 00-3.069 3.069v1.023H3.069a3.069 3.069 0 00-.341 6.118v17.409A3.072 3.072 0 005.8 30.688h5.62L7.256 33.6a1.023 1.023 0 001.173 1.676l5.21-3.647v2.809a1.023 1.023 0 002.046 0v-2.809l5.21 3.647a1.023 1.023 0 101.173-1.676l-4.161-2.912h5.62a3.072 3.072 0 003.073-3.069V10.21a3.069 3.069 0 00-.341-6.118zM11.593 3.069a1.024 1.024 0 011.023-1.023h4.092a1.024 1.024 0 011.022 1.023v1.023h-6.137zm2.046 15.344h2.046a2.728 2.728 0 110 5.456v1.7a1.023 1.023 0 11-2.046 0v-1.7h-1.7a1.023 1.023 0 110-2.046h3.751a.682.682 0 100-1.364h-2.051a2.728 2.728 0 010-5.455V13.3a1.023 1.023 0 112.046 0V15h1.7a1.023 1.023 0 110 2.046h-3.746a.682.682 0 000 1.364zm12.616-10.23H3.069a1.023 1.023 0 110-2.046h23.186a1.023 1.023 0 110 2.046zm0 0"
        fill="#d10263"
      />
    </Svg>
  );
};
// ==================================================================
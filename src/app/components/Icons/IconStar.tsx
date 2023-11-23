import Base from "./Base";
import IProps from "./IProps";

const Star = (props: IProps) => {
  return (
    <Base
      width={props.width}
      height={props.height}
      className={props.className}
      viewBox="0 0 81 81"
    >
      <path d="M96.9,41.4l-22.2,21l5.6,30.3c0.1,0.9-0.2,1.7-0.9,2.2c-0.4,0.3-0.9,0.4-1.3,0.4c-0.4,0-0.8,0-1.1-0.2L50,80.4L23,95.1  c-0.7,0.4-1.6,0.3-2.3-0.1c-0.6-0.5-1-1.3-0.9-2.2l5.6-30.3L3.1,41.3c-0.5-0.5-0.7-1.4-0.5-2.2c0.2-0.8,0.9-1.3,1.7-1.4l30.6-4  L48.1,5.8c0.3-0.8,1.1-1.2,1.9-1.2s1.6,0.4,1.9,1.2l13.2,27.9l30.6,4c0.8,0.1,1.5,0.7,1.7,1.4C97.6,40,97.4,40.8,96.9,41.4z" />
      <text
        x="0"
        y="115"
        fill="##FFCB21"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        Created by reminiarch
      </text>
      <text
        x="0"
        y="120"
        fill="##FFCB21"
        font-size="5px"
        font-weight="bold"
        font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      >
        from the Noun Project
      </text>
    </Base>
  );
};

export default Star;

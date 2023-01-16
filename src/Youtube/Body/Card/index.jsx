import React from "react";
import { CardWrap, Chanel, DropDawn, ExtraFunc, Icon } from "./style";
import dotgrid from "../../../assets/bodyAssets/imgs/dotgrid.png";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false,
    };
  }
  render() {
    const {
      id,
      title,
      video,
      view,
      time,
      user: { img, name },
    } = this.props.value;

    return (
      <CardWrap>
        <CardWrap.Video>
          <CardWrap.Img src={video} alt="Chanel video" />
        </CardWrap.Video>
        <CardWrap.Body>
          <Chanel.Img src={img} />
          <Chanel.Detail>
            <Chanel.VideoTitle>{title}</Chanel.VideoTitle>
            <Chanel.Name>{name}</Chanel.Name>
            <Chanel.Name>
              {view} &#183; {time}
            </Chanel.Name>
          </Chanel.Detail>
          <ExtraFunc>
            <ul>
              <DropDawn>
                <ExtraFunc.Img
                  onClick={() => this.setState({ change: !this.state.change })}
                  src={dotgrid}
                />
                <DropDawn.Ul className={!this.state.change ? "none" : "show"}>
                  <DropDawn.Li onClick={() => this.props.onDelete(id)}>
                    <Icon.NotInt />
                    <span>Not interested</span>
                  </DropDawn.Li>
                  <DropDawn.Li onClick={() => this.props.onDelete(id)}>
                    <Icon.NotInt rotate="true" />
                    <span>Don't recommend channel</span>
                  </DropDawn.Li>
                </DropDawn.Ul>
              </DropDawn>
            </ul>
          </ExtraFunc>
        </CardWrap.Body>
      </CardWrap>
    );
  }
}

import styled from "styled-components";
import { ReactComponent as notinterested } from "../../../assets/bodyAssets/icons/notinterested.svg";

export const CardWrap = styled.div`
  width: 100%;
  transition: all 0.1s linear;
  border-radius: 15px;
  transform-origin: top;
  cursor: pointer;

  :hover {
    transition-delay: 2s;
    transform: scale(1.1, 1.2);
    background-color: #202020;
  }
`;

CardWrap.Video = styled.div`
  width: 100%;
  height: 166px;
`;
CardWrap.Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
`;

CardWrap.Body = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
`;

export const Chanel = styled.div``;

Chanel.Img = styled.img`
  width: 36px;
  height: 36px;
  display: block;
  margin-right: 12px;
  border-radius: 50%;
`;

Chanel.Detail = styled.div`
  margin-right: auto;
`;

Chanel.VideoTitle = styled.h2`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 6px;
  font-weight: 500;
  max-width: 98%;
  max-height: 40px;
  -webkit-line-clamp: 2;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
`;

Chanel.Name = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #a8a8a8;
  font-weight: 400;
`;

export const ExtraFunc = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: end;

  ul {
    list-style-type: none;
  }
`;

ExtraFunc.Img = styled.img`
  padding-right: 3px;
  transition: all 0.27s linear;
  opacity: 0;

  ${CardWrap}:hover & {
    opacity: 1;
  }
`;

export const DropDawn = styled.li`
  position: relative;
  .none {
    display: none;
  }
  .show {
    display: block;
  }
`;

DropDawn.Ul = styled.ul`
  width: 250px;
  font-size: 14px;
  line-height: 20px;
  border-radius: 15px;
  background-color: #282828;
  position: absolute;
  right: 100%;
  top: 100%;
  padding: 8px 0;
`;
DropDawn.Li = styled.li`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  :hover {
    background-color: #383838;
  }
`;

export const Icon = styled.div``;

Icon.NotInt = styled(notinterested)`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  transform: ${({ rotate }) => rotate && "rotate(45deg)"};
`;

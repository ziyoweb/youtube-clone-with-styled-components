import styled, { css } from "styled-components";
import { ReactComponent as burger } from "../assets/sidebarAssets/icons/burger.svg";
import { ReactComponent as search } from "../assets/bodyAssets/icons/search.svg";
import { ReactComponent as grid_menu } from "../assets/bodyAssets/icons/bell.svg";
import { ReactComponent as create } from "../assets/bodyAssets/icons/create.svg";
import { ReactComponent as bell } from "../assets/bodyAssets/icons/grid-menu.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  color: #fff;
  background-color: #0f0f0f;
  padding: ${({ flex }) => !flex && "0px 12px"};
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px 0 21px;
  background-color: #212121;
  margin-bottom: 60px;
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
`;

export const Icons = styled.div``;

Icons.Burger = styled(burger)`
  width: 30px;
  height: 30px;
  margin-right: 24px;
  cursor: pointer;
`;

const common = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

Icons.Create = styled(create)`
  ${common}
`;

Icons.GridMenu = styled(grid_menu)`
  ${common}
  width: 20px;
  margin-left: 24px;
`;

Icons.Bell = styled(bell)`
  ${common}
  margin-left: 24px;
`;

Icons.Search = styled(search)`
  width: 60px;
  height: 36.35px;
  padding: 5px 16px;
  background: #424242;
  cursor: pointer;
  border-radius: 0px 20px 20px 0px;
`;

Icons.Logo = styled.img``;

export const Input = styled.input`
  width: 520px;
  background: #181818;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1;
  border: 1.18px solid #424242;
  border-radius: 20px 0px 0px 20px;
  padding: 5px 16px;
  :focus {
    outline: none;
    border: 1px solid blue;
  }
`;

export const User = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 30px;
  cursor: pointer;
`;

export const NotFoundText = styled.h3`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  margin-top: 30px;
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 240px;
  flex-direction: column;
  height: calc(100vh - 60px);
  padding-right: 12px;
  overflow: hidden;
  position: sticky;
  top: 60px;
  transition: overflow-y 0.3s linear;
  background-color: #0f0f0f;

  :hover {
    overflow-y: scroll;
    transition: overflow-y 0.3s linear;
  }
`;

export const SidebarInto = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  border-radius: 10px;

  :hover {
    background-color: ${({ title }) => (title ? "transparent" : "#383838")};
  }
`;

SidebarInto.Title = styled.h3`
  font-size: ${({ title }) => (title ? "16px" : "14px")};
  line-height: ${({ title }) => (title ? "22px" : "20px")};
  padding: ${({ title }) => title && "10px 0 10px 12px"};
  color: #fff;
  font-weight: 400;
`;

export const SubText = styled.p`
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
  padding: 17px 12px 0 12px;
  color: #aaa;
`;

SubText.Small = styled.p`
  font-size: 12px;
  color: #717171;
  line-height: 18px;
  font-weight: 4;
  padding-left: 12px;
  margin-bottom: 18px;
  margin-top: 18px;
`;

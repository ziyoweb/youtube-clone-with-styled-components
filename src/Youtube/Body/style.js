import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 60px;
  height: calc(100vh - 60px);
  overflow-y: auto;
  background-color: #0f0f0f;
  padding: 24px 20px;
`;

export const BodyWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 26px;
  column-gap: 16px;
`;

BodyWrap.Text = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

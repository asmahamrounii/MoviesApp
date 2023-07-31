import styled from "styled-components";
import { Typography, Input } from "antd";

const { Title } = Typography;

export const StyledTitle = styled(Title)`
  margin-bottom: 20px;
`;

export const StyledInput = styled(Input.Search)`
  width: 200px;
`;

export const StyledRow = styled.div`
  width: 100vw;
  height: 25rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 2rem;
  margin-bottom: 5rem;
`;

export const StyledCol = styled.div`
  width: 25rem;
`;

export const StyledCard = styled.div`
  width: 15rem;
  height: 23rem;
  margin: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

import styled from "styled-components";

export const TotalDiv = styled.div`
  display: none;

  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: red;
  }
`;

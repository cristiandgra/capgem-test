import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 20px 40px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const EmptyProducts = styled.p`
  font-size: 32px;
  font-weight: 600;
  position: absolute;
  text-align: center;
`;

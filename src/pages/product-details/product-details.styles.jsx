import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  margin: 20px;
  padding: 30px;
  justify-items: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: 25% 80%;
    border: none;
    box-shadow: none;
  }
`;

export const ProductDetailsImage = styled.img`
  width: 520px;
  height: 520px;
  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }
`;

export const ProductDetailsTable = styled.table`
  font-size: 1rem;
  margin: 20px 0;
  width: 100%;
  border-collapse: collapse;
  line-height: 1.5;
`;

export const ProductDetailsTableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #ccc;
    &:last-child {
      border-bottom: none;
    }
  }
  td {
    padding: 10px;
  }
  td:first-child {
    font-weight: 600;
  }
`;

export const ProductDetailsSelectContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 20% 10% 20%;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
`;

export const ProductDetailsSelectLabel = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const ProductDetailsSelect = styled.select`
  border-radius: 20px;
  width: 100px;
  height: 40px;
  border: 1px solid #ccc;
  margin: 0 10px;
  text-align: center;
  cursor: pointer;
`;

export const ProductDetailsSelectOption = styled.option`
  font-size: 1rem;
  background-color: #fff;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const PriceText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

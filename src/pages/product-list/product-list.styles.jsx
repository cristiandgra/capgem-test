import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  margin: 20px 40px;
  justify-items: center;
`;

export const ProductCard = styled.div`
  padding: 20px;
  width: 70%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #81dcea;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

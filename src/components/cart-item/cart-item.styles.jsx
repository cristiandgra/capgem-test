import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  align-items: center;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    font-size: 16px;
  }
`;

export const RemoveButton = styled.button`
  width: auto;
  height: 25px;
  padding: 0 15px 0 15px;
  font-size: 16px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

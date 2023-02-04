import { Link } from "react-router-dom";
import styled from "styled-components";

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: #f2f2f2;
  font-size: 14px;
`;

export const BreadcrumbSeparator = styled.span`
  display: inline-block;
  margin: 0 10px;
  color: #ccc;
`;

export const BreadcrumbLink = styled(Link)`
  color: #333;
  text-decoration: none;
  &:hover {
    color: #999;
  }
  :last-child {
    color: #999;
  }
`;

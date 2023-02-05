import styled from "styled-components";

export const ControlButton = styled("button")`
  cursor: pointer;
  border: none;
  border-radius: 100px;
  width: 25px;
  height: 25px;
  background: none;
  color: green;
  font-weight: 700;
  user-select: none;
  &:disabled {
    cursor: unset;
    color: lightgray;
    &:hover {
      background: none;
    }
  }
  &:hover {
    background: #d5fed4;
  }
`;

export const TextButton = styled("button")`
  background: none;
  border: none;
  cursor: pointer;
  color: #10cd00;
  user-select: none;
  &:hover {
    color: #0b7002;
  }
`;

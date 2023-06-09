import styled, { css } from "styled-components";

type ButtonProps = {
  danger?: boolean;
};

export default styled.button<ButtonProps>`
  height: 52px;

  padding: 0 16px;

  background: ${({ theme }) => theme.colors.primary.main};

  box-shadow: 0px 4px 10px (0, 0, 0, 0.04);

  border: none;
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;

  color: #fff;

  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background: ${theme.colors.danger.main};

      &:hover {
        background: ${theme.colors.danger.light};
      }

      &:active {
        background: ${theme.colors.danger.dark};
      }
    `}
`;

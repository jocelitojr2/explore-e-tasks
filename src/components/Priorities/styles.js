import styled from "styled-components";
import { DEVICE_BREAKPOINT } from "../../styles/deviceBreakpoints"

export const Container = styled.section`
  padding: 2rem;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
    display: flex;
    align-items: center;
    gap: 0.43rem;
  }

  > small {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const Tasks = styled.div`
  border: 1px dashed  ${({ theme }) => theme.COLORS.RED_200};
  min-height: 9.62rem;
  border-radius: 0.43rem;
  margin-top: 1rem;

  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: ${DEVICE_BREAKPOINT.MD}) {
    justify-content: center;
    align-items: center;
  }
`;
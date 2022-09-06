import styled from 'styled-components';

import car from '../../assets/car01.jpeg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  img {
    width: 175px;
  }

  form {
    display: flex;
    flex-direction: column;

    width: 350px;
    text-align: center;
    margin-top: 16px;

    h1 {
      margin-bottom: 16px;
    }

    a {
      color: ${({ theme }) => theme.primary};
      display: block;
      margin-top: 24px;
      text-decoration: none;

      transition: all 0.3s;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  > a {
    color: ${({ theme }) => theme.primary};
    display: block;
    margin-top: 24px;
    text-decoration: none;

    transition: all 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${car}) no-repeat center;
  background-size: cover;
  filter: grayscale(0.5);
`;

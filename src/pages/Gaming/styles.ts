import styled from 'styled-components';

export const Score = styled.section`
  margin: 2.5rem 1.5rem;
`;

export const Ninjas = styled.img`
  width: auto;
  height: 8rem;

  margin-top: 1.5rem;
`;

export const Bar = styled.progress`
  width: 95%;

  margin: 1.5rem;
`;

export const Trophy = styled.img`
  width: auto;
  height: 8rem;

  margin-top: 1.5rem;
`;

export const Trophies = styled.section`
  margin: 5.8rem 2rem;

  .flex-mob {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  .flex {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const Ranking = styled.section`
  margin: 5.8rem 5rem;
`;

export const Rank = styled.img`
  width: auto;
  height: 20rem;

  margin-top: 1.5rem;
`;

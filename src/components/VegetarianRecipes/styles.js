import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin: 4rem 0rem;
  
  @media (max-width: 768px) {
    width: 95%;
    margin: 1.5rem 0rem;
  }
`;

export const Card = styled.div`
  border-radius: 1.25rem;
  width: 100%;
  overflow: hidden;
  margin: 0.5rem;
  position: relative;
  min-height: 20rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1.25rem;
  }

  p {
    display: flex;
    z-index: 10;
    position: absolute;
    bottom: 0;
    color: #fff;
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
    text-shadow: 0 0 0.5rem #000;
    justify-content: center;
    transform: translateY(-2.5rem);
  }
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
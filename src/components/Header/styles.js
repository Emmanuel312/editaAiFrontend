import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 70px;
  background: #ec0000;
  display: flex;
  align-items: center;
  position: absolute;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0 40px;

  div {
    display: flex;
    justify-content: center;
    strong {
      color: #fff;
      font-size: 28px;
      margin-right: 20px;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 10px;
    }

    img {
      border-radius: 50%;
      margin-right: 10px;
      width: 40px;
      height: 40px;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        color: #fff;
        font-weight: bold;
        font-size: 14px;
      }
    }
  }
`;

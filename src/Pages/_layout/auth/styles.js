import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  width: 100%;
  max-width: 600px;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px 0px;

  > div {
    display: flex;
    align-items: center;

    strong {
      font-size: 28px;
      color: #e00000;
    }

    img {
      width: 40px;
      height: 40px;
      margin-left: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 40px;

    > strong {
      font-size: 16px;
      color: #e00000;
      margin-bottom: 5px;
    }

    input {
      border: 1px solid #e00000;
      border-radius: 30px;
      width: 335px;
      height: 35px;
      padding: 0px 10px;
      margin-bottom: 20px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #000;
      border-radius: 30px;
      width: 140px;
      height: 30px;
      align-self: center;
      transition: background 0.3s;
      transition: color 0.3s;

      strong {
        font-size: 12px;
        font-weight: 300;
      }
      &:hover {
        background: #000;
        color: #fff;
      }
    }
  }

  a {
    margin-top: 10px;
    font-size: 16px;
    color: #000;
    transition: color 0.3s;
    text-align: center;
    &:hover {
      color: #e00000;
    }
  }
`;

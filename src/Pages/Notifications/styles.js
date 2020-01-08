import styled from 'styled-components';

export const RequestNotification = styled.div`
  header {
    display: flex;
    justify-content: space-between;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
  footer {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 24px;
      color: #fff;
    }

    button {
      margin-top: 50px;
      align-items: center;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 40px;
      width: 350px;
      height: 50px;
    }
  }
`;

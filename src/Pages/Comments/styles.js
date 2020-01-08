import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
`;

export const CommentsList = styled.ul`
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;

    & + li {
      margin-top: 20px;
    }

    img {
      width: 40px;
      height: 40px;
      margin-right: 20px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 6;
      max-width: 490px;
      height: 100px;
      background: #ec0000;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding: 10px;

      header {
        color: #fff;
      }
      > strong {
        color: #ccc;
        font-size: 12px;
      }
    }
  }
`;

export const Input = styled.input.attrs(props => ({
  placeholder: `Digite o seu progresso no video de @${props.youtuberUsername}`,
}))`
  padding: 15px;
  width: 100%;
  max-width: 660px;
  border-top: 1px solid #ec0000;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  &::placeholder {
    color: #ccc;
  }
`;

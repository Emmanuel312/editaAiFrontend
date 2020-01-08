import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton';

export const NotificationsConfirmedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    border: 1px solid #ec0000;
    border-radius: 5px;
    height: 100px;
    width: 580px;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & + li {
      margin-top: 10px;
    }

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      strong {
        font-size: 16px;
      }
    }

    footer {
      align-self: center;
      span {
        color: #ccc;
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
`;

export const ListItemSkeleton = styled(Skeleton).attrs(props => ({
  count: props.count,
  height: 100,
  width: 580,
}))``;

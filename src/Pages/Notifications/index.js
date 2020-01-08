import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import * as NotificationsActions from '~/store/modules/notifications/actions';
import Box from '~/components/Box';
import { RequestNotification } from './styles';

export default function Notifications() {
  const [iterator, setIterator] = useState(0);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(NotificationsActions.getNotificationsRequest());
    setShow(true);
  }, []);

  const loading = useSelector(({ notification }) => notification.loading);
  const notifications = useSelector(
    ({ notification }) => notification.notifications
  );

  const length = useMemo(() => notifications.length, [notifications]);

  function decrement() {
    if (iterator > 0) setIterator(iterator - 1);
  }

  function increment() {
    if (iterator < length) setIterator(iterator + 1);
  }
  function handleConfirmService() {
    dispatch(
      NotificationsActions.confirmNotificationsRequest(
        notifications[iterator].service_id
      )
    );
  }
  return (
    <Box opacityColor>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        show &&
        notifications.length > 0 && (
          <RequestNotification>
            <header>
              <button
                type="button"
                onClick={decrement}
                disabled={iterator === 0}
              >
                <FaChevronLeft
                  size={80}
                  color={iterator !== 0 ? '#fff' : '#000'}
                />
              </button>

              <img
                src={notifications[iterator].youtuber_avatar_url}
                alt="avatar"
              />

              <button
                type="button"
                disabled={iterator === length - 1}
                onClick={increment}
              >
                <FaChevronRight
                  size={80}
                  color={iterator !== length - 1 ? '#fff' : '#000'}
                />
              </button>
            </header>
            <footer>
              <strong>{notifications[iterator].content}</strong>
              <button type="button" onClick={handleConfirmService}>
                Edito aqui
              </button>
            </footer>
          </RequestNotification>
        )
      )}
    </Box>
  );
}

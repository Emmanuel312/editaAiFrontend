import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Box from '~/components/Box';
import { NotificationsConfirmedList, ListItemSkeleton } from './styles';
import api from '~/services/api';

export default function Dashboard() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadNotificationsConfirmed() {
      try {
        setLoading(true);
        const response = await api.get('confirmNotifications', {
          params: { page: 2 },
        });
        setNotifications(response.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        toast.error('Não foi possivel carregar seus serviços confirmados ');
      }
    }
    loadNotificationsConfirmed();
  }, []);

  function handleDelete(id) {
    setNotifications(
      notifications.filter(notification => notification._id !== id)
    );
  }

  return (
    <Box>
      <NotificationsConfirmedList>
        {loading ? (
          <ListItemSkeleton count={3} />
        ) : (
          notifications.map(notification => (
            <li key={notification._id}>
              <header>
                <strong>{notification.content}</strong>
                <button
                  type="button"
                  onClick={() => handleDelete(notification._id)}
                >
                  <MdClose size={20} color="#ec0000" />
                </button>
              </header>

              <footer>
                <Link to={`service/${notification.service_id}/comments`}>
                  <span>clique aqui para ver os comentários</span>
                </Link>
              </footer>
            </li>
          ))
        )}
      </NotificationsConfirmedList>
    </Box>
  );
}

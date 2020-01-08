import React from 'react';
import { useSelector } from 'react-redux';
import { MdNotifications } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';
import logo from '~/assets/images/logoWhite.svg';

export default function Header() {
  const username = useSelector(({ user }) => user.profile.username);
  const avatar = useSelector(({ user }) => user.profile.avatar.url);
  return (
    <Container>
      <Content>
        <div>
          <Link to="/dashboard">
            <strong>Edita aí</strong>
          </Link>
          <img src={logo} alt="logo" />
        </div>

        <aside>
          <Link to="/notifications">
            <MdNotifications size={30} color="#fff" />
          </Link>
          <img src={avatar} alt="avatar" />
          <div>
            <span>{username}</span>
            <span>Meu perfil</span>
          </div>
        </aside>
      </Content>
    </Container>
  );
}

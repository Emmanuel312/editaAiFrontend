import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as AuthActions from '~/store/modules/auth/actions';
import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit({ email, password }) {
    dispatch(AuthActions.signInRequest(email, password));
  }

  return (
    <>
      <div>
        <strong>Edita aí</strong>
        <img src={logo} alt="logo" />
      </div>

      <Form onSubmit={handleSubmit}>
        <strong>email</strong>
        <Input name="email" type="email" />

        <strong>senha</strong>
        <Input name="password" type="password" />

        <button type="submit">
          <strong>{loading ? 'carregando...' : 'entrar'}</strong>
        </button>
      </Form>

      <Link to="register">Criar conta gratuita</Link>
    </>
  );
}

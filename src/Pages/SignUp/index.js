import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/images/logo.svg';
import * as AuthActions from '~/store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit(data) {
    dispatch(AuthActions.signUpRequest(data));
  }

  return (
    <>
      <div>
        <strong>Edita aí</strong>
        <img src={logo} alt="logo" />
      </div>

      <Form onSubmit={handleSubmit}>
        <strong>nome</strong>
        <Input name="username" />

        <strong>email</strong>
        <Input name="email" type="email" />

        <strong>senha</strong>
        <Input name="password" type="password" />

        <button type="submit">
          <strong>{loading ? 'carregando...' : 'registrar'}</strong>
        </button>
      </Form>

      <Link to="/">Já possui uma conta? Faça login</Link>
    </>
  );
}

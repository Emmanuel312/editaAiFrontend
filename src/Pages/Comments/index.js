import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatDistanceToNow } from 'date-fns';
import { pt } from 'date-fns/locale';

import * as CommentActions from '~/store/modules/comments/actions';

import { CommentsList, Input, Container } from './styles';
import Box from '~/components/Box';

export default function Comments() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.comment.loading);
  const youtuberUsername = useSelector(state => state.comment.youtuberUsername);
  const comments = useSelector(state =>
    state.comment.comments.map(comment => ({
      ...comment,
      dateFormatted: formatDistanceToNow(new Date(comment.createdAt), {
        locale: pt,
      }),
    }))
  );

  useEffect(() => {
    dispatch(CommentActions.getCommentsRequest(id));
  }, []);

  function handleKeyDown(e) {
    if (e.keyCode === 13) {
      dispatch(CommentActions.addCommentRequest(content, id));
      setContent('');
    }
  }

  return (
    <Container>
      <Box borderRadiusTop>
        {loading ? (
          <h1>Carregando</h1>
        ) : (
          <CommentsList>
            {comments.map(comment => (
              <li key={comment.id}>
                <img
                  src={comment.user.avatar.url}
                  alt={comment.user.username}
                />

                <div>
                  <header>
                    <strong>{comment.user.username} :</strong>
                    <p>{comment.content}</p>
                  </header>
                  <strong>{`há ${comment.dateFormatted}`}</strong>
                </div>
              </li>
            ))}
          </CommentsList>
        )}
      </Box>
      <Input
        youtuberUsername={youtuberUsername}
        name="content"
        value={content}
        onChange={({ target }) => setContent(target.value)}
        onKeyDown={handleKeyDown}
      />
    </Container>
  );
}

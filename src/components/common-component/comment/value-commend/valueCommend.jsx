import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AuthorComment } from './valueCommend_style';
import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';

const RegisterComment = ({ onCommentModify, onCommentDelete, comment }) => {
  console.log(onCommentModify);
  console.log(onCommentDelete);

  // 댓글수정
  const [commentEdit, setCommentEdit] = useState('');

  // 댓글수정 두번재form
  const [editValue, setEditValue] = useState('');

  const [inputOpen, setInputOpen] = useState(false);

  // 댓글 핸들체인지2
  const hanldeModifyChange = (e) => {
    setEditValue(e.target.value);
  };

  // 댓글 삭제
  const commentDelete = async (commentId) => {
    console.log(commentId);
    try {
      const { status } = await axios.delete(`/comment/bread/shop/${commentId}`);
      if (status === 200) {
        onCommentDelete();
      }
    } catch (err) {
      errorhandler(err);
      console.log(err);
    }
  };

  // 댓글 수정
  const commentModify = async (commentId) => {
    setInputOpen(!inputOpen);
    setEditValue(comment.content);

    try {
      const modifyObject = {
        content: editValue
      };
      if (inputOpen) {
        const { status } = await axios.put(`/comment/bread/shop/${commentId}`, modifyObject);
        if (status === 201) {
          onCommentModify();
          setCommentEdit(commentEdit);
        }
      }
    } catch (err) {
      errorhandler(err);
      console.log(err);
    }
  };

  return (
    <AuthorComment>
      <img src="" alt="" />
      <p>{comment.user.name}</p>

      {inputOpen ? <textarea onChange={hanldeModifyChange} className="modify_Input" value={editValue} name="editValue" /> : <span>{comment.content}</span>}

      <div className="date_wrap">
        <span>{comment.createdAt}</span>

        <span onClick={() => commentModify(comment.id)} aria-hidden="true">
          {inputOpen ? '저장' : '수정'}
        </span>
        <span onClick={() => commentDelete(comment.id)} aria-hidden="true">
          삭제
        </span>
        <span className="made_comment">댓글달기</span>
      </div>
    </AuthorComment>
  );
};

RegisterComment.propTypes = {
  onCommentModify: PropTypes.func.isRequired,
  onCommentDelete: PropTypes.func.isRequired,
  comment: PropTypes.instanceOf(Object).isRequired
};

export default RegisterComment;

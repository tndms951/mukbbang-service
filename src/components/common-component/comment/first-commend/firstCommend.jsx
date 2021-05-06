import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AuthorComment } from './firstCommend_style';
import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';
import Recommend from '../second-recomment/secondRecomment';

const RegisterComment = ({ onCommentModify, onCommentDelete, comment, breadShopId }) => {
  console.log(comment);
  console.log(breadShopId);
  // 댓글수정 form
  const [editValue, setEditValue] = useState('');
  console.log(editValue);
  // 인풋창 open close
  const [inputOpen, setInputOpen] = useState(false);

  // const [reCommendList, setReCommendList] = useState([]);

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
        onCommentDelete(commentId);
      }
    } catch (err) {
      errorhandler(err);
      console.log(err);
    }
  };

  // 댓글 수정(저장)
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
          onCommentModify(editValue, commentId);
          setEditValue(editValue);
        }
      }
    } catch (err) {
      errorhandler(err);
      console.log(err);
    }
  };

  const commentCancel = () => {
    setInputOpen(!inputOpen);
    setEditValue(comment.content);
  };

  return (
    <AuthorComment>
      <img src="" alt="" />
      <p>{comment.user.name}</p>

      {inputOpen ? <textarea onChange={hanldeModifyChange} className="modify_Input" value={editValue} name="editValue" /> : <span>{comment.content}</span>}

      <div className="date_wrap">
        <span>{comment.createdAt}</span>

        <div className="button_wrap">
          <button type="button" className="button" onClick={() => commentModify(comment.id)} aria-hidden="true">
            {inputOpen ? '저장' : '수정'}
          </button>

          {inputOpen ? (
            <button type="button" className="button" onClick={commentCancel} aria-hidden="true">
              취소
            </button>
          ) : (
            <button type="button" className="button" onClick={() => commentDelete(comment.id)} aria-hidden="true">
              삭제
            </button>
          )}
        </div>
      </div>
      <Recommend commenstId={comment.id} reComment={comment.comments} breadShopId={breadShopId} />
    </AuthorComment>
  );
};

RegisterComment.propTypes = {
  breadShopId: PropTypes.number.isRequired,
  onCommentModify: PropTypes.func.isRequired,
  onCommentDelete: PropTypes.func.isRequired,
  comment: PropTypes.instanceOf(Object).isRequired
};

export default RegisterComment;

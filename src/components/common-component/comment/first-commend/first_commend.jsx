import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import moment from 'moment';

import { AuthorComment, ReCommentForm } from './first_commend_style';
import axios from '../../../../utils/axios';
import { errorhandler } from '../../../../utils/common';
import Recommend from '../second-recomment/second_recomment';
import { setReCommentRegister } from '../../../redux/comment/bread_breadShopComment.actions';
import { selectCurrentUser } from '../../../redux/user/user.selectors';

const RegisterComment = ({ onCommentModify, onCommentDelete, onReCommentRegister, comment, breadShopId, userLoginInfo, type, breadId }) => {
  console.log(breadShopId);
  console.log(type);
  console.log(breadId);

  // 댓글수정 form
  const [editValue, setEditValue] = useState('');
  // 인풋창 open close
  const [inputOpen, setInputOpen] = useState(false);

  // 대댓글
  const [reCommendOpen, setReCommendOpen] = useState(false);
  const [reCommendForm, setReCommendForm] = useState('');

  // 댓글 핸들체인지2
  const hanldeModifyChange = (e) => {
    setEditValue(e.target.value);
  };

  // 댓글 삭제
  const commentDelete = async (commentId) => {
    try {
      if (type === 'breadHouseType') {
        const { status } = await axios.delete(`/comment/bread/shop/${commentId}`);
        if (status === 200) {
          onCommentDelete(commentId);
        }
      } else if (type === 'breadType') {
        const { status } = await axios.delete(`/comment/bread/${commentId}`);
        if (status === 200) {
          onCommentDelete(commentId);
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  // 댓글 수정(저장)
  const commentModify = async (commentId) => {
    setInputOpen(!inputOpen);
    setEditValue(comment.content);

    try {
      if (type === 'breadHouseType') {
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
      } else if (type === 'breadType') {
        const modifyObject = {
          content: editValue
        };
        if (inputOpen) {
          const { status } = await axios.put(`/comment/bread/${commentId}`, modifyObject);
          if (status === 201) {
            onCommentModify(editValue, commentId);
            setEditValue(editValue);
          }
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  const commentCancel = () => {
    setInputOpen(!inputOpen);
    setEditValue(comment.content);
  };

  // 대댓글
  const reCommendClick = () => {
    setReCommendOpen(!reCommendOpen);
  };

  const reCommentChange = (e) => {
    setReCommendForm(e.target.value);
  };

  // 대댓글 등록
  const handleSubmit = async (e, commentId) => {
    e.preventDefault();
    try {
      if (type === 'breadHouseType') {
        const reCommentObject = {
          content: reCommendForm
        };
        const { status, data } = await axios.post(`/comment/bread/shop/${breadShopId}/${commentId}`, reCommentObject);

        if (status === 201) {
          onReCommentRegister(data.data, commentId);
          setReCommendForm('');
        }
      } else if (type === 'breadType') {
        const reCommentObject = {
          content: reCommendForm
        };
        const { status, data } = await axios.post(`/comment/bread/${breadId}/${commentId}`, reCommentObject);
        if (status === 201) {
          onReCommentRegister(data.data, commentId);
          setReCommendForm('');
        }
      }
    } catch (err) {
      errorhandler(err);
    }
  };

  return (
    <AuthorComment>
      <img src={comment.user.imageUrl} alt={`${comment.user.name}의 이미지`} />
      <p>{comment.user.name}</p>

      {inputOpen ? <textarea onChange={hanldeModifyChange} className="modify_Input" value={editValue} name="editValue" /> : <span>{comment.content}</span>}

      <div className="date_wrap">
        <span>{moment(comment.createdAt).format('YYYY-MM-DD HH:mm')}</span>
        {userLoginInfo ? (
          <>
            {userLoginInfo.id === comment.user.id ? (
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
            ) : null}
          </>
        ) : null}
      </div>

      <ReCommentForm>
        {reCommendOpen ? (
          <>
            <button type="button" className="made_comment" onClick={reCommendClick}>
              취소
            </button>
            <div className="all_wrap">
              <form onSubmit={(e) => handleSubmit(e, comment.id)}>
                <textarea className="reCommend_Input" onChange={reCommentChange} value={reCommendForm} placeholder="댓글을 입력해 주세요." />
                <button type="submit" className="recomment_button">
                  댓글등록
                </button>
              </form>
            </div>
          </>
        ) : (
          <button type="button" className="made_comment" onClick={reCommendClick} aria-hidden="true">
            댓글{comment.comments.length}개
          </button>
        )}
      </ReCommentForm>
      {comment.comments.map((list) => (
        <Recommend key={`recomment-${list.id}`} list={list} reCommendOpen={reCommendOpen} comment={comment} type={type} />
      ))}
    </AuthorComment>
  );
};

RegisterComment.defaultProps = {
  type: undefined,
  breadShopId: undefined,
  breadId: undefined
};

RegisterComment.propTypes = {
  breadShopId: PropTypes.string,
  onCommentModify: PropTypes.func.isRequired,
  onCommentDelete: PropTypes.func.isRequired,
  comment: PropTypes.instanceOf(Object).isRequired,
  onReCommentRegister: PropTypes.func.isRequired,
  userLoginInfo: PropTypes.instanceOf(Object).isRequired,
  type: PropTypes.string,
  breadId: PropTypes.string
};

const reCommentStateToProps = createStructuredSelector({
  userLoginInfo: selectCurrentUser
});

const reCommentDispatch = (dispatch) => ({
  onReCommentRegister: (register, commenstId) => dispatch(setReCommentRegister(register, commenstId))
});
export default connect(reCommentStateToProps, reCommentDispatch)(RegisterComment);

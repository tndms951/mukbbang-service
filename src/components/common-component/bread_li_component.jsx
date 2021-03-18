import React from 'react';
import PropTypes from 'prop-types';

const BreadLi = ({ breadData, onHeartFilled }) => {
  const heartonClick = () => {
    onHeartFilled(breadData.id);
  };

  return (
    <li
      key={`popular-bread${breadData.id}`}
      style={{
        outline: '1px solid red'
      }}>
      <img src={breadData.image} alt="" />
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
        alt=""
        className="heart_image"
        aria-hidden="true"
        onClick={heartonClick} />

      <dl>
        <dd>{breadData.title}</dd>
      </dl>
    </li>
  );
};

BreadLi.propTypes = {
  breadData: PropTypes.instanceOf(Array).isRequired,
  onHeartFilled: PropTypes.func.isRequired
};

export default BreadLi;

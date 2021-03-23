import React from 'react';
import PropTypes from 'prop-types';

// import { errorhandler } from '../../utils/common';

const BreadLi = ({ data }) => {
  console.log(data.image);
  return (
    <li>
      <img src={data.image} alt={`${data.title}의 이미지`} />
      {data.like ? (
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
          alt="하트 이미지"
          className="heart_image"
          aria-hidden="true"
        />
      ) : (
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
          alt="빈하트 이미지"
          className="heart_image"
          aria-hidden="true"
          active
        />
      )}
      <dl>
        <dd>{data.title}</dd>
      </dl>
    </li>
  );
};

BreadLi.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired
};

export default BreadLi;

// import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { errorhandler } from '../../utils/common';

// const BreadLi = ({ breadData, onHeartFilled }) => {
//   console.log(breadData);

//   async function heartonClick() {
//     // 하트 클릭시 하트바꿈 미완성부분
//     const { status, data } = await axios.post(`/bread/favorite/${breadData.id}`);

//     try {
//       if (status === 200) {
//         onHeartFilled(data);
//       }
//     } catch (err) {
//       errorhandler(err);
//       console.log(err);
//     }
//   }
//   return (
//     <li
//       key={`popular-bread${breadData.id}`}
//       style={{
//         outline: '1px solid red'
//       }}>
//       <img src={breadData.image} alt={`${breadData.title}의 이미지`} />
//       {onHeartFilled.currentUser ? (
//         <img
//           src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
//           alt="하트 이미지"
//           className="heart_image"
//           aria-hidden="true"
//           onClick={heartonClick}
//         />
//       ) : (
//         <img
//           src="https://s3.ap-northeast-2.amazonaws.com/image.mercuryeunoia.com/images/web/jisu/+common_icon/spaceheart.png"
//           alt="빈하트 이미지"
//           className="heart_image"
//           aria-hidden="true"
//           onClick={heartonClick}
//           active
//         />
//       )}
//       <dl>
//         <dd>{breadData.title}</dd>
//       </dl>
//     </li>
//   );
// };

// BreadLi.propTypes = {
//   breadData: PropTypes.instanceOf(Array).isRequired,
//   onHeartFilled: PropTypes.func.isRequired
// };

// export default BreadLi;

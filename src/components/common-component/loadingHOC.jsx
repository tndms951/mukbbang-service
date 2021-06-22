/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { HouseRangkingWrap } from '../service-main/contents/breadShop-rangking/breadShop_rangking_style';
import Loading from './loading/loading';

const LoadingHOC = (WrapperComponent, message) => {
  const HOC = (props) => {
    const [loading, setLoading] = useState(true);
    const isLoadingset = (status) => {
      setLoading(status);
    };

    return (
      <HouseRangkingWrap>
        {loading && (
          <>
            <Loading />
            <div>{message}</div>
          </>
        )}
        <WrapperComponent {...props} isLoadingset={isLoadingset} loading={loading} />
      </HouseRangkingWrap>
    );
  };

  return HOC;
};

export default LoadingHOC;

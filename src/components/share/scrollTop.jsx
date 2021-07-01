import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history }) {
  console.log(history);
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scroll(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);
  return null;
}

export default withRouter(ScrollToTop);

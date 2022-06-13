import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ResetScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ResetScroll;

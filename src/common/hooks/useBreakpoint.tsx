import { useEffect, useState } from 'react';
import * as _ from 'lodash-es';
import {
  BREAKPOINT_LARGE,
  BREAKPOINT_MOBILE,
  BREAKPOINT_SMALL,
  BREAKPOINT_TABLET,
} from '@/common/constants';

type Breakpoint = 'mobile' | 'tablet' | 'small' | 'large' | 'xlarge';

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState(
    getBreakpoint(window.innerWidth)
  );

  useEffect(() => {
    const callback = _.throttle(() => {
      const breakpoint = getBreakpoint(window.innerWidth);
      setCurrentBreakpoint(breakpoint);
    }, 200);

    window.addEventListener('resize', callback);

    return () => window.removeEventListener('resize', callback);
  });

  return currentBreakpoint;
};

export default useBreakpoint;

const getBreakpoint = (width: number): Breakpoint => {
  if (width <= BREAKPOINT_MOBILE) {
    return 'mobile';
  } else if (width <= BREAKPOINT_TABLET) {
    return 'tablet';
  } else if (width <= BREAKPOINT_SMALL) {
    return 'small';
  } else if (width <= BREAKPOINT_LARGE) {
    return 'large';
  }

  return 'xlarge';
};

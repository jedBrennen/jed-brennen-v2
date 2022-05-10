import { NavigateOptions, useNavigate } from 'react-router-dom';

/** Navigate to the top of a page so that the scroll position isn't persisted between pages. Use this instead of React Dom's build-in @see {@link useNavigate}. */
const useNavigateToTop = () => {
  const navigate = useNavigate();

  const navigateAndReset = (
    to: string,
    options?: NavigateOptions | undefined
  ) => {
    navigate(to, options);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return navigateAndReset;
};

export default useNavigateToTop;

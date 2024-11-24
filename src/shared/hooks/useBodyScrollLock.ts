import { useEffect } from 'react';

const useBodyScrollLock = (isLocked: boolean) => {
   useEffect(() => {
      document.body.style.overflow = isLocked ? 'hidden' : 'visible';
   }, [isLocked]);
};

export default useBodyScrollLock;

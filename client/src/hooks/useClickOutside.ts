import { useEffect, useRef } from 'react';

function useClickOutside(callback: () => void) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onClickRef = (event: MouseEvent) => {
      if (ref.current && !ref.current.parentElement?.contains(event.target as HTMLDivElement)) {
        callback();
      }
    };

    document.addEventListener('mousedown', onClickRef);

    return () => document.removeEventListener('mousedown', onClickRef);
  }, [ref]);

  return ref;
}

export default useClickOutside;

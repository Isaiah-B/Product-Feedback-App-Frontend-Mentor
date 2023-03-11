import { useEffect, useRef } from 'react';

function useValidateForm() {
  const ref = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    const onClickSubmitButton = () => {
      if (ref.current) {
        ref.current.classList.add('submitted');
      }
    };

    if (ref.current) {
      const submitButton = ref.current.querySelector('button[type=submit]');

      if (submitButton) {
        submitButton.addEventListener('click', onClickSubmitButton);

        return () => submitButton.removeEventListener('click', onClickSubmitButton);
      }
    }

    return () => {};
  }, [ref]);

  return ref;
}

export default useValidateForm;

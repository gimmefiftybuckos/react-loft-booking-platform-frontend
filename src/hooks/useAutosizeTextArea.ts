import { useEffect } from 'react';

const useAutosizeTextArea = (
   textAreaRef: HTMLTextAreaElement | null,
   value: string | number
) => {
   useEffect(() => {
      if (textAreaRef) {
         textAreaRef.style.height = '50px';
         const scrollHeight = textAreaRef.scrollHeight;

         textAreaRef.style.height = scrollHeight + 'px';
      }
   }, [textAreaRef, value]);
};

export default useAutosizeTextArea;

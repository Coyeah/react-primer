import React, {useEffect} from 'react';

const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'Hooks demo';
    }
  }, [title])
}

export default useDocumentTitle;

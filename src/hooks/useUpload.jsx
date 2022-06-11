import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { showNotification } from '@/redux/notifications/actions';

import fetchy from '@/helpers/fetchy';

const useUpload = () => {
  const [files, setFiles] = useState([]);

  const dispatch = useDispatch();

  const upload = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetchy(
        '/files',
        {},
        {
          method: 'POST',
          body: formData,
          headers: {},
        },
      );

      if (!response) {
        throw response;
      }

      setFiles(files.concat(response.id));
    } catch (e) {
      console.warn(e);

      dispatch(showNotification({
        id: 'upload-file',
        type: 'error',
        text: 'Произошла ошибка при загрузке файла, пожалуйста, попробуйте позже.',
      }));
    }
  };

  return {
    files,
    lastUploadedFile: files[files.length - 1],
    upload,
  };
};

export default useUpload;

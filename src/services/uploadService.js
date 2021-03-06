import { userEndpoints } from '../utils';

export const uploadFile = async (
  file,
  token,
  setProgress,
  setFinishedUploading,
  setFileUrl
) => {
  try {
    const xhr = new XMLHttpRequest();
    const formData = new FormData();

    formData.append('file', file, file.name);

    xhr.upload.onprogress = function (event) {
      /* ----------- Percentage Of Upload --------------  */
      const percent = Math.round((100 * event.loaded) / event.total);
      setProgress(percent);
    };

    /* ----------- Handling Error --------------  */
    xhr.upload.onerror = (e) => {
      xhr.abort();
      throw new Error('Error uploading file.');
    };

    /* ----------- Displaying The File Link --------------  */
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const response = JSON.parse(xhr.responseText);
        if (response.status === 'ok') {
          setFileUrl(`${response.uuid}`);
          setFinishedUploading(true);
        }
      }
    };

    xhr.open('POST', userEndpoints.upload, true);
    xhr.setRequestHeader('x-authorization', `Bearer ${token}`);
    xhr.send(formData);
  } catch (error) {
    throw error;
  }
};

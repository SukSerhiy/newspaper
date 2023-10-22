import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const showError = (error: AxiosError<any, any>) => {
  const message = error.response?.data?.message || error.message;
  toast.error(message);
};

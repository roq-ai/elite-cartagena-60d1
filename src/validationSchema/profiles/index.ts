import * as yup from 'yup';

export const profileValidationSchema = yup.object().shape({
  language: yup.string().required(),
  user_id: yup.string().nullable(),
});

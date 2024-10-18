import * as yup from "yup";
export const LoginScema = yup.object({
  username: yup.string().required("please enter username"),
  email: yup.string().required("please enter email"),
});

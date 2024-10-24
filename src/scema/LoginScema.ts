import * as yup from "yup";
export const LoginScema = yup.object({
  email: yup.string().required("please enter email"),
  password: yup.string().required("please enter email"),
});

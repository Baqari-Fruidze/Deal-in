import * as yup from "yup";
export const RegisterScema = yup.object({
  username: yup.string().min(4, "min 4 symbols").required("can' t be empty"),
  email: yup
    .string()
    .required("can' t be empty")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format."
    ),
  password1: yup
    .string()
    .required("can' t be empty")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_-]{3,16}$/,
      "min one big char and one number "
    ),

  password2: yup
    .string()
    .oneOf([yup.ref("password1"), undefined], "Passwords must match")
    .required("password confirmation can't be empty"),
  role: yup.string().required("please choose your role"),
  month: yup.string().required("required"),
  day: yup.string().required("required"),
  year: yup.string().required("required"),
});

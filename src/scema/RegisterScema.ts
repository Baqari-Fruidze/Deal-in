import * as yup from "yup";
export const RegisterScema = yup.object({
  username: yup.string().min(4, "min 4 symbols").required("can' t be empty"),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format."
    )
    .required("can' t be empty"),
  password1: yup
    .string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9_-]{3,16}$/,
      "min one big char and one number "
    )
    .required("can' t be empty"),
  password2: yup
    .string()
    .oneOf([yup.ref("password1"), undefined], "Passwords must match")
    .required("Password confirmation can't be empty"),
  role: yup.string().required("please choose your role"),
  month: yup.string().required("please select month"),
  day: yup.string().required("please select day"),
  year: yup.string().required("please select year"),
});

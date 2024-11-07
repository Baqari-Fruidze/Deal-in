import * as yup from "yup";

export const LoginSchema = yup.object({
  email: yup.string().required("emailRequired"),
  password: yup.string().required("passwordRequired"),
});

// export const LoginSchema = () => {
//   const { t } = useTranslation();

//   return Yup.object().shape({
//     email: Yup.string()
//       .required(t("emailRequired"))
//       .email(t("emailInvalid")),
//     password: Yup.string()
//       .required(t("passwordRequired"))
//       .min(8, t("passwordMin")),
//   });
// };

import * as yup from "yup";

export const LoginSchema = (t: (key: string) => string) =>
  yup.object({
    email: yup.string().required(t("emailRequired")),
    password: yup.string().required(t("passwordRequired")),
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

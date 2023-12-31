import * as yup from "yup"

export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("El username es requerido").email("debe ingresar un formato email"),
    password: yup.string().trim().required("El password es requerido").min(8,"minimo 8 caracteres"),
})
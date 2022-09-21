import * as Yup from "yup";

export const Part3Modal = Yup.object({
    term:Yup.object().required("Working day's required"),
    present:Yup.number().positive().integer().min(0,"Minimal value 0")
    .max(83, "Maximum value 83")
    .required(" Please enter Present Days vlaue from 0 to 83")
})
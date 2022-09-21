import * as Yup from "yup";

export const Part2Modal = Yup.object({
  category: Yup.object().required("Category is required"),
  grade: Yup.object().required("Grade is required"),
});

import * as Yup from "yup";

export const Part1Modal = Yup.object({
  sub: Yup.object().required("Subject is required ."),
  FA_num: Yup.number()
    .positive()
    .integer()
    .min(0, "Minimal value 0")
    .max(40, "Maximum value 40")

    .required("FA is required. Please enter value from 0 till 40"),
  Oral_num1: Yup.number()
    .positive()
    .integer()
    .min(0, "Minimal value 0")
    .max(10, "Maximum value 10")
    .required("Oral is required. Please enter value from 0 till 10"),
  BA_num: Yup.number()
    .positive()
    .integer()
    .min(0, "Minimal value 0")
    .max(40, "Maximum value 40")
    .required("BA is required. Please enter value from 0 till 40"),
  Oral_num2: Yup.number()
    .positive()
    .integer()
    .min(0, "Minimal value 0")
    .max(10, "Maximum value 10")
    .required("Oral is required. Please enter value from 0 till 10"),
});

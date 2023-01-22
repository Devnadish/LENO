import *  as yup from "yup";


export const userSchema=yup.object().shape({
    name:yup.string().required("الاسم مطلوب"),
    phone:yup.string().required("رقم الجوال مطلوب"),
    email:yup.string().email("الايميل غير صحيح").required("الايميل مطلوب"),
    password:yup.string().min(4).max(10).required("كلمة السر مطلوبة"),
})


export const checkBeforeSave=async(dataToCheck)=>{
    let errorArray=[]
    const isDataValid = await userSchema
      .validate(dataToCheck, { abortEarly: false })
      .then((responseData) => {
        errorArray = [];
        return errorArray;
      })
      .catch((err) => {
        errorArray = err.errors;
        console.log("error :", errorArray);
        return errorArray;
      });

      return errorArray
}
import { convertFormDataToJson } from "@/helpers/form-validation";
import { AuthError } from "next-auth";
import * as Yup from "yup"
const FromSchema=Yup.object({
    username:Yup.string().required("Required"),
    password:Yup.string().required("Required"),

});

export const loginActions =async(prevState,formData)=>{
    const fields =convertFormDataToJson(formData);

    try{
        FromSchema.validateSync(fields,{abortEarly});

        await signIn("credentials",fields)
    }
    catch(err){
        if (err instanceof Yup.ValidationError) {
			return getYupErrors(err.inner);
		
        }else if(err instanceof AuthError){
            console.log(err)

        }

		throw new Error(err);

    }
}
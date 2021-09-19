import { toast } from "react-toastify"

const SuccessMessage=(message)=>{
    return (
        toast.success(message,{
            position: 'top-right',
            autoClose:1000,
            hideProgressBar:true
          })
    )
}

export {SuccessMessage}
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Here is your toast.", { position: "bottom-right" , duration:3000});
toast.error('Successfully created!');
export const HotToast = () => {
   return (
      <div>
         {/* <button onClick={notify}>Make me a toast</button> */}
         <Toaster />
         
      </div>
   );
};

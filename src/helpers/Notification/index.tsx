import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const toastify: any = toast;
export default function openNotification(
  type: any,
  text: any,
  status: any = null
) {
  console.log("openNotification:", type, text);
  let realMessage: any =
    text || "درخواست شما با مشکل مواجه شده است ,لطفا مجددا تلاش کنید";
  if (status === 500) realMessage = "مشکل در ارتباط با سرور";
  toastify[type](realMessage);
}

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

toast.configure({
    autoClose: 5000,
    draggable: false,
    position: toast.POSITION.TOP_CENTER
});

const NotificationSuccess = (title) => toast.success(title);
const NotificationError = (title) => toast.error(title);
const NotificationWarn = (title) => toast.warn(title);
const NotificationInfo = (title) => toast.info(title);

export {NotificationSuccess, NotificationError, NotificationWarn, NotificationInfo}

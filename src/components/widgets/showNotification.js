import {notification} from "antd";

// export type NotificationProps {
//     details: {
//         message: string,
//         description: string,
//     },
//     type: string
// }

export const NotificationType = {
    success: {
        message: "Mesajul a fost trimis!",
        description: "Mesajul dvs. a fost trimis cu succes. Vă vom răspunde cât de curând la adresa de e-mail introdusă"
    },
    error: {
        message: "A avut loc o eroare!",
        description: "Vă rugăm să reîncercaţi mai târziu, sau să ne contactaţi la adresa: srdi.contactform@gmail.com"
    }
}

// export const showNotification = ({type, details}: NotificationProps) => {
export const showNotification = (type, details) => {
    notification[type]({
        message: details.message,
        description: details.description,
    });
};

import emailjs from 'emailjs-com';

import { toast } from 'react-toastify';

export const sendEmail = async (formRef) => {
    try {
        await emailjs.sendForm('service_jtefeih', 'template_cp7n91k', formRef, 'ut-QCXmhwtfNQ95Iu');
        toast.success("Your message has been sent", {
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: "dark",
            icon: false,
        });
        formRef.reset();
    } catch (error) {
        console.log(error.text);
        toast.error("Oops an error occurred, try again", {
            hideProgressBar: true,
            position: toast.POSITION.BOTTOM_RIGHT,
            theme: "dark",
            icon: false,
        });
    }
};

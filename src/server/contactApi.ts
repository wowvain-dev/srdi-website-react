import axios from "axios";

export type FormValues = {
    name: string,
    email: string,
    subject: string,
    message: string
}

export const sendContactForm = async (values: FormValues) => {
    const url="https://yfarg0u37b.execute-api.eu-north-1.amazonaws.com/default/srdi-contact-form/contact-us";
    
    const config = {
        headers: {
            'Content-Type': "application/json",
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'x-api-key': 'UmjXOzbAA4444iUwVu1Tv6LXZ4Xxue4r2pYNajMe'
        }
    }

    // axios({
    //     method: 'post',
    //     url: url,
    //     headers: config.headers,
    //     data: values
    // })
    // .then(data=>console.log(data))
    // .catch(err=>console.log(err));
    const submitRequest = async (reqBody: any) => {
        reqBody = JSON.stringify(reqBody);
        console.log(`reqBody: ${reqBody}`);
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: config.headers,
                body: reqBody
            });
            const json = await res.json();
            return {response: json, error: undefined};
        } catch (error) {
            return {response: undefined, error: error};
        }
    };

    return await submitRequest(values);
}
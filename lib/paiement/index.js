import { getCartItemsName, getCartTotal } from '../../utils';
import { saveUser, saveUserPayment } from '../firebase/firestore';

let paymentRequestUrl = "https://paytech.sn/api/payment/request-payment";
let fetch = require('node-fetch');// http client

const API_KEY = 'e3e7b7a218f140bc1c860070d0d2d96eb16d646a5db7a8bc0c123385e12111ab'
const API_SECRET = 'af29d57c9d02cced9992c05ee7681b747d380acb206968b42c68a62f2195dd25'


const headers = {
    Accept: "application/json",
    'Content-Type': "application/json",
    API_KEY: API_KEY,
    API_SECRET: API_SECRET,
};


export const purchaseProduct = (cartList = [], user={}) =>{

    let price = Number( getCartTotal( cartList ).toFixed(2))
    let name = getCartItemsName(cartList)
    let commandeUID = self.crypto.randomUUID();
    const customFields = {
        userFullName: user.displayName,
        phone: user?.phoneNumber,
        email: user?.email
    }

    const paymentInfo = {
        item_name:name,
        item_price:price,
        currency:"XOF",
        ref_command:commandeUID,
        command_name:`Paiement de ${name} via Fama Art`,
        env:"test",
        ipn_url:"https://famart-three.vercel.app/",
        success_url:"https://famart-three.vercel.app/checkout?paymentStatus=1&ref="+commandeUID,
        cancel_url:"https://famart-three.vercel.app/pages/checkout?paymentStatus=0&ref="+commandeUID,
        custom_field:JSON.stringify(customFields)
    };

    fetch(paymentRequestUrl, {
        method:'POST',
        body:JSON.stringify(paymentInfo),
        headers: headers
    })
    .then(function (response) {
        return response.json()
    })
    .then(function (jsonResponse) {
        console.log("purchaseProduct::: ", jsonResponse)
        const {success, redirect_url} = jsonResponse
        if(success == 1){
            saveUserPayment(user, paymentInfo)
            window.open(redirect_url)
        }
        
        return jsonResponse
    })
}
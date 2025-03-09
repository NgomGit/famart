import axios from "axios";

const data = { "recipient_email": "ngomdxn@gmail.com", "amount": 1250, "support_fees ": 0, "send_notification":1 }
const url = "https://app.paydunya.com/api/v1/dmp-api"
const headers = {
    "Content-Type": "application/json",
    "PAYDUNYA-MASTER-KEY": "r89wFK1z-SeG4-6FGo-Hc9w-kXqHvUhfbeLI",
    "PAYDUNYA-PRIVATE-KEY": "test_private_bXVOxV8GrZLy7US71kbdb6AMPm1",
    "PAYDUNYA-TOKEN": "TwWheleKubTrDwl4h5rh"
};

export const initiatePayment = ()=>{
    axios.post(url, data, {headers})
        .then((resp)=>{
            console.log("Response paydunya is ", resp)
        }).catch((error)=>{
            console.log("Error is ", error)
        })
}



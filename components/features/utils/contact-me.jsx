import React from 'react';

const WHATSAPP_NUMBER = '+221784242400'; // Replace with your WhatsApp number (with country code, no + or spaces)
const DEFAULT_MESSAGE = "Bonjour je m'intéresse à ce produit. Est il disponible ?";
const ContactMeButton = ({ ImageUrl, message = DEFAULT_MESSAGE }) => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}\n${encodeURIComponent(ImageUrl)}`;
    const handleCall = () => {
        window.location.href = `tel:${WHATSAPP_NUMBER}`;
    };
    return (
        <div className='d-flex' style={{ width: '100%', gap: '10px' }}>
            <a 
                // className="btn-icon btn-add-cart product-type-simple"
                aria-label="Chat on WhatsApp" 
                target='_blank'
                style={
                    { backgroundColor: '#25D366', 
                        color: 'white', 
                        padding: '5px 10px', 
                        borderRadius: '5px', 
                        textDecoration: 'none', 
                        display: 'inline-block',
                        alignItems: 'center',
                        fontWeight: 'bold',
                    }}
                onClick={()=> console.log("I am clicked")}
                href={whatsappUrl} >
                <i className="fab fa-whatsapp" color='#25D366'></i> Whatsapp
            </a>
             <a
                onClick={handleCall}
                style={{
                    fontSize: '1.2rem',
                    color: '#333',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    border: '1px solid #333',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    padding: '5px 10px',
                }}
            >
                <i class="fa fa-phone"></i>  Appeler
            </a>
        </div>
    );
};

export default ContactMeButton;

{/* <a className="btn-icon btn-add-cart product-type-simple"
                                    aria-label="Chat on WhatsApp" 
                                    target='_blank'
                                    onClick={()=> console.log("I am clicked")}
                                    href={"https://wa.me/+221779722668?text=Bonjour%20je%20m%27int%C3%A9resse%20%C3%A0%20ce%20produit.%20Est%20il%20disponible%20%3F\n" + encodeURIComponent(product.pictures[0].url)} >
                                        <i className="fab fa-whatsapp"></i>Contacter par whatsapp
                                </a> */}
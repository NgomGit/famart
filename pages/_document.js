import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps ( ctx ) {
        const initialProps = await Document.getInitialProps( ctx )
        return { ...initialProps }
    }

    render () {
        return (
            <Html lang="en">
                <Head>
                    <base href="" />
                    { process.env.NODE_ENV === "production" ? <title> Sac en Wax | FamaArts</title> : "" }

                    <meta
                        name="description"
                        content="Découvrez nos sacs en wax, chapeaux, vétements et accéssoires africains faits main au Sénégal. Cuir et tissus traditionnels, artisanat authentique. Livraison rapide dans le monde entier."
                    />
                    <link rel="icon" href="favicon.png" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,500,600,700,800%7CPoppins:200,300,400,500,600,700,800%7COswald:300,400,600,700" />
                    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                    <link rel="stylesheet" type="text/css" href="/vendor/bootstrap.min.css" />
                    <link rel="stylesheet" type="text/css" href="/vendor/fontawesome-free/css/all.min.css" />
                    <link rel="stylesheet" type="text/css" href="/vendor/simple-line-icons/css/simple-line-icons.min.css" />
                    {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "Product",
                        name: "Sac en wax personnalisable, vêtements traditionnels et accessoires africains faits main",
                        image: [
                            "https://res.cloudinary.com/fama-art/image/upload/product_images/kxi8m57hn8kt0stalyhm.jpg",
                            "https://res.cloudinary.com/fama-art/image/upload/product_images/ffybquqttubvphdzz86x.jpg",
                            "https://res.cloudinary.com/fama-art/image/upload/product_images/wddif75904rxuo81egbt.jpg",
                            "https://res.cloudinary.com/fama-art/image/upload/product_images/uf1vbnj9fcf1cldwfske.jpg"
                        ],
                        description:
                            "Sac en wax et pagne fait main au Sénégal avec des motifs traditionnels. Artisanat africain authentique, unique et de haute qualité.",
                        brand: {
                            "@type": "Brand",
                            name: "FamaArts",
                        },
                        offers: {
                            "@type": "Offer",
                            url: "https://www.famaarts.com/shop/",
                            priceCurrency: "XOF",
                            price: "10000",
                            availability: "https://schema.org/InStock",
                            itemCondition: "https://schema.org/NewCondition"
                        },
                        }),
                    }}
                    />
                </Head>
                <body>
                    <Main />
                    {/* <script src="js/jquery.min.js"></script> */}
                    <NextScript />
                </body>
            </Html>
        )
    }
}
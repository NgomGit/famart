import { connect } from "react-redux";
import { toast } from "react-toastify";
import ALink from "../../components/common/ALink";
import { getCartTotal } from "../../utils";
import { purchaseProduct } from "../../lib/paiement";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/router";
import { getUserByUID, updateUserPayment } from "../../lib/firebase/firestore";
import PNotify from "../../components/features/notif/p-notify";

function CheckOut({ cartList }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userDetails, setUserDetails] = useState(null);
    const router = useRouter();
    const query = router.query;

    // ✅ Fix 1: onAuthStateChanged inside useEffect with cleanup
    //    to avoid registering a new listener on every render.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                router.push({ pathname: "/pages/login" });
            }
        });
        return () => unsubscribe();
    }, []);

    // Fetch user details once we have a logged-in user
    useEffect(() => {
        if (currentUser?.uid) {
            getUserByUID(currentUser.uid, (details) => {
                setUserDetails(details);
            });
        }
    }, [currentUser]);

    // Handle payment status from query params (redirect back from payment gateway)
    useEffect(() => {
        if (query?.paymentStatus) {
            const { paymentStatus, ref } = query;
            updateUserPayment(ref, paymentStatus, () => {
                handlePaymentStatus(paymentStatus);
            });
        }
    }, [query]);

    const handlePaymentStatus = (status) => {
        if (status == 0) {
            toast(
                <PNotify title="Erreur" icon="fas fa-times" text="Paiement annulé." />,
                { containerId: "default", className: "notification-error" }
            );
        } else {
            toast(
                <PNotify title="Succès" icon="fas fa-check" text="Paiement effectué avec succès." />,
                { containerId: "default", className: "notification-success" }
            );
            router.push({ pathname: "/" });
        }
    };

    // ✅ Fix 2: onClick={() => onCheckout} was passing a function reference
    //    and never actually calling it. Changed to onClick={onCheckout}.
    const onCheckout = () => {
        purchaseProduct(cartList, userDetails);
    };

    // Derive first/last name safely
    const nameParts = userDetails?.displayName?.split(" ") ?? [];
    const firstName = nameParts[0] ?? "";
    const lastName = nameParts[1] ?? "";

    return (
        <main className="main main-test">
            <div className="container checkout-container">
                <ul className="checkout-progress-bar d-flex justify-content-center flex-wrap">
                    <li>
                        <ALink href="cart">Panier</ALink>
                    </li>
                    <li className="active">
                        <ALink href="checkout">Commande</ALink>
                    </li>
                    <li className="disabled">
                        <ALink href="#">Commande Complète</ALink>
                    </li>
                </ul>

                {cartList.length === 0 ? (
                    <div className="cart-empty-page text-center">
                        <p className="noproduct-msg mb-2">
                            Le checkout n'est pas disponible avec un panier vide.
                        </p>
                        <i className="icon-bag-2"></i>
                        <p>Aucun produit dans le panier</p>
                        <ALink
                            href="/shop"
                            className="btn btn-dark btn-add-cart product-type-simple btn-shop font1"
                        >
                            Retourner à la boutique
                        </ALink>
                    </div>
                ) : (
                    <>
                        <div className="checkout-discount">
                            <h4>
                                Pour modifier vos informations, cliquez sur :{" "}
                                <button
                                    type="button"
                                    className="btn btn-link btn-toggle"
                                    onClick={() => router.push({ pathname: "account" })}
                                >
                                    Mon profil
                                </button>
                            </h4>
                        </div>

                        <div className="row">
                            {/* ── LEFT COLUMN: User info ────────────────────────── */}
                            <div className="col-lg-7">
                                <ul className="checkout-steps">
                                    <li>
                                        <h2 className="step-title">Vos informations</h2>

                                        <div id="checkout-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            Prénom{" "}
                                                            <abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <input
                                                            disabled
                                                            value={firstName}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            Nom{" "}
                                                            <abbr className="required" title="required">*</abbr>
                                                        </label>
                                                        <input
                                                            disabled
                                                            value={lastName}
                                                            type="text"
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Numéro téléphone{" "}
                                                    <abbr className="required" title="required">*</abbr>
                                                </label>
                                                <input
                                                    disabled
                                                    value={userDetails?.phoneNumber ?? ""}
                                                    type="tel"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Email{" "}
                                                    <abbr className="required" title="required">*</abbr>
                                                </label>
                                                <input
                                                    disabled
                                                    value={userDetails?.email ?? ""}
                                                    type="email"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* ── RIGHT COLUMN: Order summary ───────────────────── */}
                            <div className="col-lg-5">
                                <div className="order-summary">
                                    <h3>Votre commande</h3>

                                    <table className="table table-mini-cart">
                                        <thead>
                                            <tr>
                                                <th colSpan="2">Produit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartList.map((item, index) => (
                                                <tr key={"checks" + index}>
                                                    <td className="product-col">
                                                        <h2 className="product-title">
                                                            {item.name + " × " + item.qty}
                                                        </h2>
                                                    </td>
                                                    <td className="price-col">
                                                        <span>{item.price.toFixed(2)} FCFA</span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr className="cart-subtotal">
                                                <td>
                                                    <h4>Sous total</h4>
                                                </td>
                                                <td className="price-col">
                                                    <span>{getCartTotal(cartList).toFixed(2)} FCFA</span>
                                                </td>
                                            </tr>

                                            <tr className="order-shipping">
                                                <td className="text-left" colSpan="2">
                                                    <h4 className="m-b-sm">Livraison</h4>
                                                    <div className="form-group form-group-custom-control">
                                                        <div className="custom-control custom-radio d-flex">
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                name="shipping"
                                                                id="shipping-national"
                                                                defaultChecked
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="shipping-national"
                                                            >
                                                                National
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="form-group form-group-custom-control mb-0">
                                                        <div className="custom-control custom-radio mb-0 d-flex">
                                                            <input
                                                                type="radio"
                                                                name="shipping"
                                                                id="shipping-international"
                                                                className="custom-control-input"
                                                            />
                                                            <label
                                                                className="custom-control-label"
                                                                htmlFor="shipping-international"
                                                            >
                                                                International
                                                            </label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr className="order-total">
                                                <td>
                                                    <h4>Total</h4>
                                                </td>
                                                <td>
                                                    <b className="total-price">
                                                        <span>{getCartTotal(cartList).toFixed(2)} FCFA</span>
                                                    </b>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>

                                    <div className="payment-methods">
                                        <h4>Méthodes de paiement</h4>
                                        <div className="info-box with-icon p-0">
                                            <p>Wave, Orange Money, Carte bancaire.</p>
                                        </div>
                                    </div>

                                    {/* ✅ Fix 2 (applied here): was onClick={() => onCheckout} 
                                        which returned the function but never called it. */}
                                    <button
                                        type="button"
                                        onClick={onCheckout}
                                        className="btn btn-dark btn-place-order"
                                    >
                                        Confirmer la commande
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </main>
    );
}

const mapStateToProps = (state) => ({
    cartList: state.cartlist.cart ?? [],
});

export default connect(mapStateToProps)(CheckOut);
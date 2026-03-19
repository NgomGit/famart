import ALink from "../../components/common/ALink";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/router";
import { getUserByUID, saveUser } from "../../lib/firebase/firestore";

const INITIAL_FORM = { email: "", password: "", phoneNumber: "" };

export default function Login() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState(INITIAL_FORM);
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false);

    // ✅ Fix 1: onAuthStateChanged moved inside useEffect to avoid
    //    registering a new listener on every render (memory leak).
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getUserByUID(user.uid, (userDetails) => {
                    if (userDetails?.displayName == null) {
                        router.push({ pathname: "/pages/account" });
                    } else {
                        router.push({ pathname: "/" });
                    }
                });
            }
        });
        return () => unsubscribe();
    }, []);

    const onFieldChange = (key, value) => {
        setForm((prev) => ({ ...prev, [key]: value }));
        setErrorMessage(null);
    };

    const switchMode = (loginMode) => {
        setIsLogin(loginMode);
        setForm(INITIAL_FORM);
        setErrorMessage(null);
    };

    const logInUser = async () => {
        const { email, password } = form;
        if (!email || !password) {
            setErrorMessage("Veuillez remplir tous les champs.");
            return;
        }
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirect is handled by the onAuthStateChanged listener above
        } catch (error) {
            if (error.code === "auth/invalid-credential") {
                setErrorMessage("Email ou mot de passe incorrect.");
            } else {
                setErrorMessage("Veuillez réessayer plus tard.");
            }
        } finally {
            setLoading(false);
        }
    };

    const signUpUser = async () => {
        const { email, password, phoneNumber } = form;
        if (!email || !password || !phoneNumber) {
            setErrorMessage("Veuillez remplir tous les champs.");
            return;
        }
        setLoading(true);
        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await saveUser({
                uid: user.uid,
                email,
                phoneNumber,
                displayName: "",
            });
            setTimeout(() => {
                router.push({ pathname: "/pages/account" });
            }, 500);
        } catch (error) {
            console.error("Sign up error:", error.code, error.message);
            if (error.code === "auth/email-already-in-use") {
                setErrorMessage("Cet email est déjà utilisé.");
            } else if (error.code === "auth/weak-password") {
                setErrorMessage("Le mot de passe doit contenir au moins 6 caractères.");
            } else {
                setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="main">
            <div className="page-header">
                <div className="container d-flex flex-column align-items-center">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <ALink href="/">Accueil</ALink>
                                </li>
                                <li className="breadcrumb-item">
                                    <ALink href="/shop">Boutique</ALink>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Mon Compte
                                </li>
                            </ol>
                        </div>
                    </nav>
                    <h1>Mon Compte</h1>
                </div>
            </div>

            <div className="container login-container">
                <div className="row">
                    <div className="col-lg-10">
                        <div className="row mb-1">
                            {isLogin ? (
                                // ─── LOGIN FORM ───────────────────────────────────────────
                                <div className="col-md-6 align-self-center">
                                    <div className="heading mb-1">
                                        <h2 className="title">Se connecter</h2>
                                    </div>

                                    {/* ✅ Fix 2: type="button" prevents accidental form submission */}
                                    <div>
                                        <label htmlFor="login-email">
                                            Adresse e-mail <span className="required">*</span>
                                        </label>
                                        {/* ✅ Fix 3: controlled inputs now always have a defined value ("") */}
                                        <input
                                            type="email"
                                            id="login-email"
                                            className="form-input form-wide"
                                            value={form.email}
                                            onChange={(e) => onFieldChange("email", e.target.value)}
                                            required
                                        />

                                        <label htmlFor="login-password">
                                            Mot de passe <span className="required">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            id="login-password"
                                            className="form-input form-wide"
                                            value={form.password}
                                            onChange={(e) => onFieldChange("password", e.target.value)}
                                            required
                                        />

                                        {errorMessage && (
                                            <div>
                                                <label className="text-danger">{errorMessage}</label>
                                            </div>
                                        )}

                                        <div className="form-footer">
                                            <label className="mb-0">Pas encore membre ?</label>
                                            <ALink
                                                href="#"
                                                onItemClick={() => switchMode(false)}
                                                className="forget-password text-dark form-footer-right"
                                            >
                                                Créer un compte
                                            </ALink>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={logInUser}
                                            disabled={loading}
                                            className="btn btn-dark btn-md w-100 mb-20"
                                        >
                                            {loading ? "Connexion..." : "Se Connecter"}
                                        </button>
                                        <br />
                                    </div>
                                </div>
                            ) : (
                                // ─── SIGN UP FORM ─────────────────────────────────────────
                                <div className="col-md-6">
                                    <div className="heading mb-1">
                                        <h2 className="title">Ouvrir un compte</h2>
                                    </div>

                                    <div>
                                        <label htmlFor="register-email">
                                            Adresse e-mail <span className="required">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="register-email"
                                            className="form-input form-wide"
                                            value={form.email}
                                            onChange={(e) => onFieldChange("email", e.target.value)}
                                            required
                                        />

                                        <label htmlFor="register-phone">
                                            Numéro de téléphone <span className="required">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="register-phone"
                                            className="form-input form-wide"
                                            value={form.phoneNumber}
                                            onChange={(e) => onFieldChange("phoneNumber", e.target.value)}
                                            required
                                        />

                                        <label htmlFor="register-password">
                                            Mot de passe <span className="required">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            id="register-password"
                                            className="form-input form-wide"
                                            value={form.password}
                                            onChange={(e) => onFieldChange("password", e.target.value)}
                                            required
                                        />

                                        {errorMessage && (
                                            <div>
                                                <label className="text-danger">{errorMessage}</label>
                                            </div>
                                        )}

                                        <div className="form-footer ">
                                            <label className="mb-0">Déjà membre ?</label>
                                            <ALink
                                                href="#"
                                                onItemClick={() => switchMode(true)}
                                                className="forget-password text-dark form-footer-right"
                                            >
                                                Se connecter à mon compte
                                            </ALink>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={signUpUser}
                                            disabled={loading}
                                            className="btn btn-dark btn-md w-100 mb-20"
                                        >
                                            {loading ? "Création..." : "Créer mon compte"}
                                        </button>
                                        <br />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
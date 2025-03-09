import ALink from "../../components/common/ALink";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../../lib/firebase";
// import { redirect } from 'next/navigation'
import { useRouter } from 'next/router';

export default function Login() {
    // const auth = AppAuth.g
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState()
    const [login, setLogin] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)


    useEffect( ()=>{

        async function fetchCurrentUser() {
            const user = await auth.currentUser
            console.log("Login::::::: Current currentUser is ", user)
            if(user?.displayName == null){
                router.push({
                    pathname:'/pages/account'
                })
            }else{
                router.push({
                    pathname:'/'
                })
            }
        }

        fetchCurrentUser()
    },[])


    const onUserChange = (key, value) =>{
        let temp = {...currentUser}
        temp[key] = value
        setCurrentUser(temp)
        setErrorMessage(null)
    }

    const logInUser = () => {
        const {email, password } = currentUser
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("User log in is ", user)
                if(!user.displayName){
                    router.push({
                        pathname:'/pages/account'
                    })
                }else{
                    router.push({
                        pathname:'/'
                    })
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("User log in error is ",errorCode)
                if(errorCode === "auth/invalid-credential"){
                    setErrorMessage("Email ou mot de passe incorrect")
                }else{
                    setErrorMessage("Veuillez réssayer plus tard")
                }
            });
    }

    const signInUser = ()=>{
        const {email, password } = currentUser
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                // ...
                console.log("Sign in user ", user)
                router.push({
                    pathname:'/pages/account'
                })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Sign in user error ", errorMessage, errorCode)
                // ..
            });
    }

    return (
        <main className="main">
            <div className="page-header">
                <div className="container d-flex flex-column align-items-center">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><ALink href="/">Home</ALink></li>
                                <li className="breadcrumb-item"><ALink href="/shop">Shop</ALink></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    My Account
                            </li>
                            </ol>
                        </div>
                    </nav>

                    <h1>Mon Compte</h1>
                </div>
            </div>



            <div className="container login-container">
                <div className="row">
                    <div className="col-lg-10 ">
                        <div className="row">
                            {login ?
                                <div className="col-md-6 align-self-center">
                                <div className="heading mb-1">
                                    <h2 className="title">Se connecter</h2>
                                </div>

                                <form action="#">
                                    <label htmlFor="login-email">
                                        Email address <span className="required">*</span>
                                    </label>
                                    <input type="email" value={currentUser?.email} onChange={(e) => {
                                        onUserChange('email', e.target.value)
                                    }} className="form-input form-wide" id="login-email" required/>

                                    <label htmlFor="login-password">
                                        Password <span className="required">*</span>
                                    </label>
                                    <input type="password" value={currentUser?.password} onChange={(e) => {
                                        onUserChange('password', e.target.value)
                                    }} className="form-input form-wide" id="login-password" required/>
                                    <div>
                                        <label className={"text-danger"}>{errorMessage}</label>
                                    </div>
                                    <div className="form-footer">
                                        {/*<div className="custom-control custom-checkbox mb-0">*/}
                                        {/*    <input type="checkbox" className="custom-control-input" id="lost-password"/>*/}
                                        {/*</div>*/}
                                        <label className="mb-0" htmlFor="lost-password">Pas encore membre ?
                                        </label>
                                        <ALink href={"#"} onItemClick={() => setLogin(false)}
                                               className="forget-password text-dark form-footer-right">Créer un compte
                                            Password?</ALink>
                                    </div>
                                    <button type="submit" onClick={logInUser} className="btn btn-dark btn-md w-100">
                                        Se Connecter
                                    </button>
                                </form>
                            </div>
                                :
                                <div className="col-md-6">
                                <div className="heading mb-1">
                                <h2 className="title">Ouvrir un compte</h2>
                                </div>

                                    <form action="#">
                                        <label htmlFor="login-email">
                                            Email address <span className="required">*</span>
                                        </label>
                                        <input type="email" value={currentUser?.email} onChange={(e) => {
                                            onUserChange('email', e.target.value)
                                        }} className="form-input form-wide" id="login-email" required/>

                                        <label htmlFor="login-password">
                                            Password <span className="required">*</span>
                                        </label>
                                        <input type="password" value={currentUser?.password} onChange={(e) => {
                                            onUserChange('password', e.target.value)
                                        }} className="form-input form-wide" id="login-password" required/>

                                        <div className="form-footer">
                                            {/*<div className="custom-control custom-checkbox mb-0">*/}
                                            {/*    /!*<input type="checkbox" className="custom-control-input" id="lost-password"/>*!/*/}
                                            {/*    /!*<label className="custom-control-label mb-0" htmlFor="lost-password">Remember*!/*/}
                                            {/*    /!*    me</label>*!/*/}
                                            {/*</div>*/}

                                            <label className="mb-0" htmlFor="lost-password">Déja membre ?
                                            </label>
                                            <ALink href={"#"} onItemClick={() => setLogin(true)}
                                                   className="forget-password text-dark form-footer-right">Se connecter à mon compte
                                            </ALink>
                                        </div>
                                        <button type="submit" onClick={signInUser} className="btn btn-dark btn-md w-100">
                                            Créer mon compte
                                        </button>
                                    </form>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";
const provider = new GoogleAuthProvider();

export const Authcontext = createContext();
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googlelogin = () => {
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            const userElmail = currentuser?.email || user?.email;
            const loggedemail = { email: userElmail }
            setUser(currentuser)
            setLoading(false)
            if (currentuser) {
                axios.post('https://assingment11-projects-server.vercel.app/jwt', loggedemail, { withCredentials: true })
                    .then(res => {
                        console.log('response token', res.data)
                    })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        user,
        register,
        signin,
        logOut,
        googlelogin,
        loading,
    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;
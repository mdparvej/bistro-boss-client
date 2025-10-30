import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../Firebase/firebase.config';
import useAxios from "../hooks/useAxiosPublic";
import useAxiosPublic from "../hooks/useAxiosPublic";
export const myContex = createContext();
const auth = getAuth(app)

const ContexApi = ({children}) => {
    const axiosPublic = useAxiosPublic();
    const GoogleAuth = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                        setLoading(false);
                    }
                })
            }
            else{
                //TODO: remove token (if token stored in the client) local storage, chching , in menory
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });
        return () => {
            return unsubcribe();
        }
    },[axiosPublic])
    const createAccount = (email,password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }
    const updateUser = (name,photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }
    const googleSignin = () => {
        return signInWithPopup(auth,GoogleAuth);
    }
    const authInfo = {
        createAccount,
        login,
        logOut,
        updateUser,
        user,
        loading,
        googleSignin
    }
    return <myContex.Provider value={authInfo}>
        {children}
    </myContex.Provider>;
};

export default ContexApi;
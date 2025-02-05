import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut

} from "firebase/auth";
import app from "../firebase/firebase.config";

// create a context
export const SportsContext = createContext()
export const auth = getAuth(app)


const SportsProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [loader, setLoader] = useState(true);
    const [email, setEmail] = useState("");

    // toggle case 
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    // Function to toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Persist the theme in localStorage
    };

    // Apply theme to body element when it changes
    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);




    // login with google
    const provider = new GoogleAuthProvider();

    const logInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUsers(result.user);
            return result;
        } catch (err) {
            console.error("Error during Google login:", err);
            throw err;
        } finally {
            setLoader(false);
        }
    };

    // logout
    const userLogOut = () => {
        signOut(auth)
            .then(() => {
                setUsers(null);
            })
            .catch((err) => {
                console.error("Something went wrong:", err);
            });
    };

    // create user using email and password

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login register user
    const loginRegisterUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // forgot password with email
    const resetPasswordUsingEmail = (email) => {
        return sendPasswordResetEmail(auth, email);
    };

    // get user data from database
    useEffect(() => {

        fetch(`https://assignment-10-server-mu-three.vercel.app/users/${users?.email}`)
            .then(data => data.json())
            .then(result => {
                setCurrentUser(result)
            })
            .catch(err => console.log(err))
            .finally(() => setLoader(false))
    }, [users])


    // observer function for current user
    useEffect(() => {
        setLoader(true);
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth State Changed:", currentUser);
            setUsers(currentUser);
            setLoader(false);
        });
        return () => unsubscribe();
    }, []);


    const contextInfo = {
        loader,
        setLoader,
        users,
        setUsers,
        logInWithGoogle,
        userLogOut,
        createNewUser,
        loginRegisterUser,
        resetPasswordUsingEmail,
        email,
        setEmail,
        setCurrentUser,
        currentUser,
        toggleTheme,
        setTheme,
        theme

    }


    return (
        <SportsContext.Provider value={contextInfo}>
            {children}
        </SportsContext.Provider>
    )


}

export default SportsProvider
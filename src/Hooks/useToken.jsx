import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UseToken = () => {
    const [user] = useAuthState(auth);
    const [token, setToken] = useState('');
    // console.log(user);
    useEffect(() => {
        const email = user?.email;
        const displayName = user?.displayName;

        const currentUser = {
            displayName: displayName,
            email: email,
            role: "user",
            status:"active"
        }


        if (email) {
            fetch(`https://abc-publications-server-ii.vercel.app/api/v1/users/${email}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const accessToken = data?.accessToken;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }

    }, [user]);
    return [token];
};

export default UseToken;
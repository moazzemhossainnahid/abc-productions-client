import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const useProfile = () => {
    const [user] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    const email = user?.email;

    useEffect(() => {
        fetch(`https://abc-publications-server-ii.vercel.app/api/v1/users/${email}`)
            .then(res => res.json())
            .then(data => setProfile(data))
    }, [email]);

    console.log(profile);

    return [profile];
};

export default useProfile;
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import extensionStore from '../helper/local-store';
import { setIsAuth, setPhrase, setPinCode } from '../store/slices/user';

export default function useAuth() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.user.isAuth);

    useEffect(() => {
        async function getAuth() {
            const phrase = await extensionStore.get('phrase');
            const pinCode = await extensionStore.get('pinCode');
            if (phrase && pinCode) {
                dispatch(setPinCode(pinCode));
                dispatch(setPhrase(phrase));
                dispatch(setIsAuth(true));
            } else {
                dispatch(setIsAuth(false));
            }
        }
        getAuth();
    }, [dispatch]);
    return isAuth;
}

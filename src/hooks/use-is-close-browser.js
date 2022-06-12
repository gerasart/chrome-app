import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import extensionStore from "../helper/local-store";
import { setIsCloseBrowser } from "../store/slices/user";

export default function useIsCloseBrowser() {
    const isCloseBrowser = useSelector((state) => state.user.isCloseBrowser);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getIsCloseBrowser() {
            const icb = await extensionStore.get("isCloseBrowser");
            if (icb) {
                dispatch(setIsCloseBrowser(true));
                await extensionStore.set("isCloseBrowser", false);
            } else {
                dispatch(setIsCloseBrowser(false));
            }
        }
        getIsCloseBrowser();
    }, [dispatch]);
    return isCloseBrowser;
}

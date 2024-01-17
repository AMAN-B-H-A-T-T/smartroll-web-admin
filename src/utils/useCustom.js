import { useSelector } from "react-redux";
import { useState } from "react";

const useCustom = (initialValue) => {
    const tokens = useSelector((state) => state.userTokenAccess.Token)
    const [counter,setCounter] = useState(initialValue)
    const customGet = (action) => {
        // You can perform any additional logic here before updating the state
        return counter
    };
    return [counter, customGet];
}
export default useCustom
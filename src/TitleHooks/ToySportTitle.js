import { useEffect } from "react";

const ToySportTitle =(title)=>{
    useEffect(()=>{
        document.title =`ToySportZ  | ${title}`;
    },[title])
}

export default ToySportTitle;
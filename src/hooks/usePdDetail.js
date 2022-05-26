import { useEffect, useState } from "react";

const usePdDetail = pdsId => {
    const [pd, setPd] = useState({});

    useEffect(() => {
        const url = `https://cryptic-everglades-92183.herokuapp.com/pds/${pdsId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPd(data));

    }, [pdsId]);
    return [pd]
}
// 
export default usePdDetail;
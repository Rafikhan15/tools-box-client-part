import { useEffect, useState } from "react";

const usePdDetail = pdsId => {
    const [pd, setPd] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/pds/${pdsId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setPd(data));

    }, [pdsId]);
    return [pd]
}
// 
export default usePdDetail;
import { useEffect, useState } from "react";

const useGear = () => {
    const [gears, setGears] = useState([]);

    useEffect(() => {
        fetch('https://camping-cove.onrender.com/gear')
            .then(res => res.json())
            .then(data => setGears(data));
    }, []);
    return [gears, setGears];
}

export default useGear;
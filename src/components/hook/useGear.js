import { useEffect, useState } from "react";

const useGear = () => {
    const [gears, setGears] = useState([]);

    useEffect(() => {
        fetch('https://agile-fjord-18815.herokuapp.com/gear')
            .then(res => res.json())
            .then(data => setGears(data));
    }, []);
    return [gears, setGears];
}

export default useGear;
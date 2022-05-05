
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg'
import Footer from '../Footer/Footer';
import Gear from '../Gear/Gear';
import useGear from '../hook/useGear';

import './Home.css'

const Home = () => {
    const [gears, setGears] = useGear();

    const gears2 = gears.slice(0, 6);
    return (
        <div className='home'>
            <img src={banner} alt="" />

            <div>

                <div className='gear-box'>

                    {
                        gears2.map(gear => <Gear

                            key={gear._id}
                            gear={gear}


                        ></Gear>)


                    }



                </div>
                <div className='link-btn'>
                    <Link to="/inventory">Manage Inventory</Link>
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>


    );
};

export default Home;
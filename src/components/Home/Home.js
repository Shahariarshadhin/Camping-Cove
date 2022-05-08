
import { Link } from 'react-router-dom';
import banner from '../../images/banner.jpg'
import Footer from '../Footer/Footer';
import Gear from '../Gear/Gear';
import useGear from '../hook/useGear';
import KnowledgeCenter from '../KnowledgeCenter/KnowledgeCenter';

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
                <KnowledgeCenter></KnowledgeCenter>
            </div>
            <div className='mt-5 subscribe'>
                <h5>Subscribe to Our Email List</h5>
                <p className='text-warning'>Sign up and receive 20% Off and get exclusive access to promotions, sales events, pre-order sales & more!</p>
                <input placeholder="Enter email" type="email" name="email" required />
                <input className='subscribe-btn mx-2 ' type="submit" value="Subscribe" />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>


    );
};

export default Home;
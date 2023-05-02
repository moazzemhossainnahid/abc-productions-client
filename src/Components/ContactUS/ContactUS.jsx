
import { AiFillRedEnvelope, AiOutlineHeatMap, AiOutlinePhone } from 'react-icons/ai';
import Consultation from './Consultation';

const ContactUS = () => {
    return (
        <>
            <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '420px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-content text-center font-thin">
                    <div className="max-w-md">
                        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-cyan-400">Helping You
                        </h1>
                        <h1 className='text-slate-800 mb-5 text-3xl md:text-5xl font-bold'>Stay Healthy</h1>
                        <p className="mb-5 text-slate-800">Contact us for details</p>
                        
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-5xl font-semibold mt-8'>Contacts</h1>
                <div className='divider w-14 mt-2 bg-orange-400 h-1 mx-auto'></div>
                <div className='grid md:grid-cols-3 grid-cols-1 mx-auto w-full md:mt-12'>
                    <div className='md:border-r-2 px-3 py-6 flrx justify-center text-center items-center w-full mx-auto'>
                        <AiOutlineHeatMap className="text-orange-400 w-full mx-auto text-5xl mb-3" />
                        <p>4321 Dhaka, <br />
                            Bangladesh, 3850</p>
                    </div>
                    <div className='md:border-r-2 text-center px-3 py-6'>
                        <AiOutlinePhone className="text-orange-400 w-full mx-auto text-5xl mb-3" />
                        <p>8 800 2336 7811 <br />
                            8 988 2737 1132</p>
                    </div>
                    <div className='py-6 text-center px-3'>
                        <AiFillRedEnvelope className="text-orange-400 w-full mx-auto text-5xl mb-2" />
                        <p>support@abcproductions.com</p>
                    </div>
                </div>
            </div>
            <Consultation />
        </>
    );
};

export default ContactUS;
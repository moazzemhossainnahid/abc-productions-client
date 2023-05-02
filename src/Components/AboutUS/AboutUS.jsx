
import AboutusBanner from './AboutusBanner';
import AboutMission from './AboutMission';
import AboutInfo from './AboutInfo';

const AboutUS = () => {
    return (
        <>
            <div className='w-full h-full'>
                <AboutusBanner></AboutusBanner>
                <AboutMission />
                <AboutInfo></AboutInfo>
            </div>
        </>
    );
};

export default AboutUS; 
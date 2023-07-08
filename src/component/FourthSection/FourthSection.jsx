import './ForthSection.css';
import ServeceCard from '../ServeceCard/ServeceCard';
import graphic from '../images/graphic.png';
import social from '../images/Untitled-1 (2).png'
import identety from '../images/identety.png'

import smallLogo from '../images/small-logo.png';


const ForthSection = () => {

    return(
        <div className='forth-section-container'>
            <div className='service-header-container'>
            <h1>خدماتنا</h1>
            <div className='under-line-with-logo'>
                <div className='left-line-logo'></div>
                <img src={smallLogo} alt="logo" className='small-logo-img' />
                <div className='right-line-logo'></div>
            </div>
            </div>
            <div className='cards-container'>
                <ServeceCard gclassName='Servece-card-container' header="موشن جرافيك" sourc={identety} />
                <ServeceCard gclassName='middle-card Servece-card-container' header="موشن جرافيك" sourc={graphic}  />
                <ServeceCard gclassName='Servece-card-container' header="موشن جرافيك" sourc={identety} />
            </div>

        </div>
    )


};



export default ForthSection;
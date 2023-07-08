// import ReactPlayer from 'react-player';
import rightimg from '../images/right-img.png';
import tvDown from '../images/tv-down.png';
import myVideo from '../vedios/video.mp4';
import './SecondSection.css';
import tvUp from '../images/tv-up.png';


const SecondSection = () =>{

    let playing = false;

    const videoClick = (event) => {
        if(playing){
            event.target.pause();
            playing=false;
        }
        else {
            event.target.play();
            playing=true;
        }
    }

    return(
        <div className="second-container">
            <div className='vedio-container'>
                <div className='vedio-inner-container'>
                    <video src={myVideo}  onClick={videoClick}/>
                    <img src={tvUp} alt="" className='tv-up-img' />
                </div>
                <img src={tvDown} alt="" className='tv-down-img' />
                <p>نسعى لتحقيق الابداع والتميز</p>
            </div>
            <div className='right-back-container'>
                <img src={rightimg} alt="Half Logo" />
            </div>
        </div>


    )
};


export default SecondSection;
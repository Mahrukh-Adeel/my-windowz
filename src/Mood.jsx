import './mood.css'; 
import retroImage from './assets/mood.gif';
import ship from './assets/ship_rt_side.gif'
function Mood() {
    return (
        <div className="mood-container h-full w-full">
            <div className="mood-header">
                <h1 className="mood-title">Welcome to the Mood Board</h1>
                <p className="mood-description">
                    Immerse yourself in the vibrant, nostalgic vibes of the '90s. Let's take a trip down memory lane.
                </p>
            </div>
            <div className="mood-images">
                <img src={retroImage} alt="Retro Vibe" className="mood-image h-full w-full" />
                <img src={ship} alt="Retro Vibe" className="mood-image h-full w-full" />
                
            </div>
            <div className="mood-footer">
                <p className="footer-text">A blast from the past!</p>
            </div>
        </div>
    );
}

export default Mood;

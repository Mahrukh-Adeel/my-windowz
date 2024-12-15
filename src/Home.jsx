import './Home.css'
import wel from "./assets/wel.png"
import cloud from './assets/clouds200.gif'
function Home(){
    return(
        <>
            <div className="main grid place-items-center h-full text-center">
                <img src={wel} alt="" className="w-full h-full" />
                <p id='what' className="retro-text my-5">
                    This site consists of all the random things I could think of in two days.
                </p>
                <div className="">
                 <p className="blink">The text be blinkin!</p>
                </div>
                <img src={cloud} alt="" className="pb-2 h-full w-full" />
            </div>
        </>
    )
}
export default Home;
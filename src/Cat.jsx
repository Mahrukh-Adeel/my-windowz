import './cat.css'
import code from './assets/codee.gif'
import cat1 from './assets/neko.gif'
import blin from './assets/catblink.gif'
import eye from './assets/catseyes.gif'
import ordinary from './assets/ordinarycats.gif'
function Cat(){
    return(
        <>
            <div className="main1 grid place-items-center h-full text-center">
                <p className="cat-neon-text">I LOVE ALL KINDS OF CATS!!!</p>
                <div className=" m-3 ccode flex flex-row">
                    <img src={code} alt="" className=" mx-4" />
                    <h1>As you can see cats are smart enough to code <br/>
                        They Dont do it to give everyone a chance
                    </h1>
                </div>
                <img src={cat1} alt="" className="h-full w-full" />
                <div className="flex flex-row justify-center items-center text-2xl">
                    <img src={blin} alt="" className="" />
                    <p className='text-white ml-5'>NOT THE CAT BLINKING</p>
                </div>
                <div className="">
                    <img src={eye} alt="" className="h-full w-full py-3" />
                    <img src={ordinary} alt="" className="h-full w-full" />
                </div>
            </div>
        </>
    )
}
export default Cat;

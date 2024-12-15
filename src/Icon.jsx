import binImage from './assets/bin.png';
import mycomp from './assets/comp.png'
import folder from './assets/folder.png'
import './icon.css'

function Icon() {
  return (
    <>
      <div className="icon-container p-3">
        <figure className='grid place-items-center pb-2'>
          <img className="" src={binImage} alt="BIN" />
          <figcaption>Recycle Bin</figcaption>
        </figure>
        <figure className='grid place-items-center pb-2'>
          <img className="" src={mycomp} alt="computer" />
          <figcaption>My Computer</figcaption>
        </figure>
        <figure className='grid place-items-center'>
          <img className="h-10 w-10" src={folder} alt="Folder" />
          <figcaption>Attributions</figcaption>
        </figure>
      </div>
    </>
  );
}

export default Icon;

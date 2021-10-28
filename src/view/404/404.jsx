import React from 'react';
import './styles.scss'
//import notfound from '../../assests/notFound.png'
// import notPage from '../../assests/404.svg'
import notfound from '../../assests/NotFound.svg'

const NotFound = () => {
  return (
   <React.Fragment>
       <div className='notFound__container'>
           <div className='notFound__content'>
                <div className='notFound__image'>
                    <img src={notfound} alt='not found'/>
                </div>
                <div className='notFound__home'>
                    <button className='notFound__button'>
                        Back Home
                    </button>
                </div>
           </div>
       </div>
   </React.Fragment>
  );
}
export default NotFound;
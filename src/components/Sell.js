import React from 'react'
import convert from '../assets/vector.png';

export const Sell = () => {
  return (
    <div data-content id='sell' className='tabs__sell'>
        <div className='tabs__current'>
                  <p>Soles</p>
                  <div className='tabs__right'>                
                    <p>Envías</p>
                    <div>
                      <span>S/.</span>
                      <input id='value' type='number'/>
                    </div>
                  </div>
        </div>
        <div className='tabs__current'>
                  <p>Dólares</p>
                  <div className='tabs__right'>                
                    <p>Recibes</p>
                    <div>
                      <span>$</span>
                      <input type='text' readOnly/>
                    </div>
                  </div>
        </div>
        <button 
            className='tabs__button-change'>
                <img src={convert}/>
        </button>
        <button 
            className='tabs__button'
            type='submit'
            
        >Iniciar operación</button>
    </div>
  )
}

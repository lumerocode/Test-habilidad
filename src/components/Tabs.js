import React from 'react'

export const Tabs = ({purchase, sell}) => {
  return (
    <div className='tabs__menu'>
        <div data-tab='#purchase' className='tabs--active'>
            <p >Dólar compra</p>
            <p>{purchase}</p>
        </div>
        <div data-tab='#sell'>
            <p >Dólar venta</p>
            <p>{sell}</p>
        </div>
    </div>
  )
}

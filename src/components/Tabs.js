import React from 'react'

export const Tabs = ({purchase, sell}) => {
  return (
    <div className='tabs__menu'>
        <div data-tabs='#purchase' className='tab__purchase'>
            <p >Dólar compra</p>
            <p>{purchase}</p>
        </div>
        <div data-tabs='#sell'>
            <p >Dólar venta</p>
            <p>{sell}</p>
        </div>
    </div>
  )
}

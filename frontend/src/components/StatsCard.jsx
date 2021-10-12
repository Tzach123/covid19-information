import React from 'react'

const StatsCard = ({ title, amount, color, backGround }) => {
    return (
        <div className='statsCard' style={{ backgroundColor: backGround }} >
            <h3>{title}</h3>
            <h2 style={{ color: color }}>{amount}</h2>
        </div>
    )
}

export default StatsCard

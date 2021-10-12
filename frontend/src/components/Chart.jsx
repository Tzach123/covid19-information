import React from 'react'

import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis } from 'recharts'


const Chart = ({ stroke, data, title }) => {
    var array = []
    if (data)
        array = Object.entries(data).map(item => {
            return {
                name: item[0],
                uv: item[1],
                pv: item[1],
                amt: item[1]
            }
        })


    return (
        <div className='chart'>
            <h2>{title} chart</h2>
            <LineChart width={400} height={200} data={array} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <Line dataKey="uv" stroke={stroke} />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default Chart

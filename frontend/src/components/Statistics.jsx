import React, { useState, useEffect } from 'react'

import StatsCard from './StatsCard'
import { getInfoCorona } from '../actions/corona'
import Error from './Error'


const Statistics = () => {

    const [coronaInfo, setCoronaInfo] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        getInfoCorona()
            .then(({ data, error }) => {
                if (!error) {
                    setCoronaInfo(data)
                    setError('')
                } else {
                    setError(error)
                }
            }).catch(e => {
                setError(e)
            })

    }, [])

    function numberWithCommas(x) {
        x = x || ''
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const updatedDate = new Date(coronaInfo.updated)
    return error ? <Error component='Statistics Component' errorText={error} /> : (
        <div className='statistics'>
            <StatsCard color='white' backGround='#111' title='Last Updated at (D/M/YYYY)' amount={`${updatedDate.toLocaleDateString()} ${updatedDate.toLocaleTimeString()}`} />
            <StatsCard color='red' title='Death' amount={numberWithCommas(coronaInfo.deaths)} />
            <StatsCard color='white' title='Cases' amount={numberWithCommas(coronaInfo.cases)} />
            <StatsCard color='greenyellow' title='Recovered' amount={numberWithCommas(coronaInfo.recovered)} />
        </div>

    )
}

export default Statistics

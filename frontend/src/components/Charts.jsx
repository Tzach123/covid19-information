import React, { useState, useEffect } from 'react'

import { getHistoryCorona } from '../actions/corona'
import Chart from '../components/Chart'
import Error from '../components/Error'

const Charts = () => {

    const [chart, setChart] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        getHistoryCorona()
            .then(({ data, error }) => {
                if (!error) {
                    setChart(data)
                    setError('')
                } else {
                    setError(error)
                }
            }).catch(e => {
                setError(e)
            })
    }, [])

    return error ? <Error component='Charts' errorText={error} /> : (
        <div className='charts'>
            <Chart stroke='white' title='cases' data={chart.cases} />
            <Chart stroke='red' title='death' data={chart.deaths} />
            <Chart stroke='greenyellow' title='recovered' data={chart.recovered} />
        </div>
    )
}

export default Charts

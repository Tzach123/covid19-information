import React from 'react'

import CoronaMap from '../components/CoronaMap'
import Statistics from '../components/Statistics'
import Charts from '../components/Charts'

const Covid19Screen = () => {
    return (
        <>
            <h1>COVID-19 INFORMATION</h1>
            <CoronaMap />
            <Statistics />
            <Charts />

        </>
    )
}

export default Covid19Screen

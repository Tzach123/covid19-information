import React, { useState, useEffect, useRef } from 'react'

import L from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { getInfoCoronaCountry } from '../actions/corona'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'
import Error from './Error'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl
})

const location = [31.47, 35.13]
const zoom = 8

const CoronaMap = () => {

    const [coronaInfoArray, setCoronaInfoArray] = useState([])
    const [error, setError] = useState()

    const mapRef = useRef()

    useEffect(() => {
        getInfoCoronaCountry()
            .then(({ data, error }) => {
                if (!error) {
                    setCoronaInfoArray(data)
                    setError('')

                    const { current = {} } = mapRef
                    const { leafletElement: map } = current

                    setTimeout(() => {
                        map.flyTo(location, 3, { duration: 3 })
                    }, 1000)

                } else {
                    setError(error)
                }
            }).catch(e => {
                setError(e)
            })



    }, [mapRef])


    return error ? <Error component='Map Component' errorText={error} /> : (
        <div className='map'>
            <Map ref={mapRef} center={location} zoom={zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                {coronaInfoArray.length && coronaInfoArray.map((countryItem, index) => (
                    <Marker key={index} position={[countryItem.countryInfo.lat, countryItem.countryInfo.long]}>
                        <Popup>
                            {countryItem.country}
                        </Popup>
                    </Marker>
                ))}
            </Map>
        </div>
    )
}

export default CoronaMap

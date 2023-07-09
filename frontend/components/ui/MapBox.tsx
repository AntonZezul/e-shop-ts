import React, { useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'
import Image from 'next/image'
import { Map, Marker } from 'react-map-gl'

type MapBoxBase = {
  latitude: number
  longitude: number
  width: string
  height: string
  zoom: number
}

const inititalMap: MapBoxBase = {
  latitude: 48.1692799,
  longitude: 17.142125,
  width: '100%',
  height: '100%',
  zoom: 15,
}
const mobileMap = {
  latitude: 48.1692799,
  width: '100%',
  height: '100%',
  longitude: 17.142125,
  zoom: 5,
}

export default function MapBox() {
  const [viewport, setViewport] = useState(inititalMap)

  return (
    <div className="h-1/2">
      <Map
        {...viewport}
        mapStyle="mapbox://styles/whyborn/ckz740lgn003714qidqa2mqgi"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        scrollZoom={false}
        onMove={(viewport) => setViewport(viewport)}
      >
        <Marker longitude={17.142125} latitude={48.1692799}>
          <div className="w-9 h-9 p-1 flex items-center justify-center bg-secondary rounded-full relative">
            <Image src="/assets/logo/logo.png" alt="marker" priority fill />
          </div>
        </Marker>
      </Map>
    </div>
  )
}

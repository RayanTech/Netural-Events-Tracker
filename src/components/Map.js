import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationIceBerg from './LocationIceBerg'
import LocationWildFire from './LocationWildFire'
import LocationInfoBox from './LocationInfoBox'


const Map = ({eventData ,center, zoom}) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev =>{
        if(ev.categories[0].id === 15){
                return  <LocationIceBerg lat ={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
                onClick = {() => setLocationInfo({id: ev.id, title: ev.title, date: ev.geometries[0].date})}/>
        }
        if(ev.categories[0].id === 8){
                return  <LocationWildFire lat ={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} 
                onClick = {() => setLocationInfo({id: ev.id, title: ev.title, date: ev.geometries[0].date})}/>
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: " Please replace this text with your api" }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
               {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info= {locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8465
    },
    zoom: 6
}

export default Map
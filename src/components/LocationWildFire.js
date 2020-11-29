import {Icon} from '@iconify/react'
import locationIconWildFire from '@iconify/icons-mdi/fire-alert'

const LocationWildFire = ({  lat, lng, onClick  }) => {
    return (
        <div className="location-Fire" onClick={onClick}>
            <Icon icon={locationIconWildFire} className="location-icon" />
        </div>
    )
}

export default LocationWildFire
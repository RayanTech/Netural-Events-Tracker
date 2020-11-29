import {Icon} from '@iconify/react'
import locationIconiceberg from '@iconify-icons/noto/ice';

const LocationIceBerg = ({  lat, lng, onClick  }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIconiceberg} className="location-icon" />
        </div>
    )
}

export default LocationIceBerg



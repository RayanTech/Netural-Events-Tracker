import Map from './components/Map'
import {useState, useEffect} from 'react'
import Header from './components/header'


function App() {

  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async() =>{
      setLoading(true)
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const {events} = await res.json()

      setEventData(events)
      setLoading(false)

    }
    fetchEvents()
  }, [])

  return (
    <div>
      <Header/>
      {!loading ? <Map eventData={eventData}/> : <h1>Loading...</h1>}
    </div>
  );
}

export default App;
import "bootstrap/dist/css/bootstrap.min.css"
import ClockHeading from './components/ClockHeading'
import ClockLogo from './components/clockLogo'
import CurrentTime from './components/CurrentTime'


function App() {
 

  return (
    <>
    <center>

    <ClockHeading />
    <ClockLogo />
    <CurrentTime />
    </center>

    </>
  )
}

export default App;

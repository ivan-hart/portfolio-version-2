// importing main container compenents
import Goals from './Main-components/Goals'
import Experience from './Main-components/Experience'
import Knowlege from './Main-components/Knowlege'
import Projects from './Main-components/Projects'
import Footer from './Main-components/Footer'

// importing Main.css
import './Main.css'

// defining the Main component es6 function
const Main = () => {
    return (
        <div className="center">
            <Goals />
            <Experience />
            <Knowlege />
            <Projects />
            <Footer />
        </div>
    )
}

// exporting the Main component
export default Main
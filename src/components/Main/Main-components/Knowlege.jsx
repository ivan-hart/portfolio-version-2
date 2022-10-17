// importing css
import './main-comp.css'

// defining the Knowlege custom element with es6
const Knowlege = () => {
    return (
        <div className="component box-shadow">
            <p className="main-header">My Knowlege</p>
            <hr color='#333333'/>
            <div className='image-array'>
                <img className='html' src="" alt="HTML5 Logo" />
                <img className='css' src="" alt="CSS3 Logo" />
                <img className='js' src="" alt="JavaScript Logo" />
                <img className='react' src="" alt="React logo" />
            </div>
        </div>
    )
}

// exporting the Knowlege element to Main.jsx
export default Knowlege
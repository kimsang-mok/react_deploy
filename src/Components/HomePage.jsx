import Navigation from './Navigation';
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className="App">
            <Navigation />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

            </header>
            <Link to='/test' className='link' >Test</Link>
        </div>
    )
}

export default HomePage
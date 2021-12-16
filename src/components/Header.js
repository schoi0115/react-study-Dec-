import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd }) => {
    // const name = 'Shawn'
    // const x = true
    const onClick = () => {
        return (
            console.log("Click")
        )
    }
    return (
        <header className='header'>

            {/* <h1 style={{color: 'red', backgroundColor: 'black'}}>{title}</h1> - Styling medthod 1 */}
            {/* <h1 style={headingStyle}>{title}</h1> - Styling Method 2 */}
            <h1>{title}</h1>
            <Button onClick={onAdd} color='green' text='add' />
            {/* <Button color='blue' text='delete' />
            <Button color='red' text='edit' /> */}

            {/* <h2>Hello</h2>
            <h2>Hello {name} {x ? 'Yes' : 'No'}</h2> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// Header.propTypes ={
//     title: PropTypes.string.isRequired,
// } - Styling Method 2

const headingStyle = {
    color: 'red', backgroundColor: 'black'
}
export default Header
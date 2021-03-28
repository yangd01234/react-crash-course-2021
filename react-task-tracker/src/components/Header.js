import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('Click')
    }
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick} />
        </header>
    )
}

// default prop that will always populate if no header given
Header.defaultProps = {
    title: "Task Tracker Default",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// you can also style using const by adding a style={headingStyle} into tag
//const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black'
//}
export default Header
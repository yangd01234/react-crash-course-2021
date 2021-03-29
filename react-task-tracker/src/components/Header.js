import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd} />
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
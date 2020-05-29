import React from 'react'

const Header = (props) => {
    return (
        <div className="container" style={styles.containerStyle}>
            <h3 style={{display: 'inline-block', marginLeft: '-150px'}}>BookMyGig</h3>
            <button
                className="btn btn-primary"
                onClick={() => props.modal(true)}
                style={styles.btnStyle}
                >
                Are you a Creator?
            </button>
        </div>
    )
}

const styles = {
    containerStyle:{
        marginTop: '30px',
        float: 'right',
        color: '#fff'
    },
    btnStyle: {
        float: 'right',
        marginRight: '75px'
    }
}

export default Header
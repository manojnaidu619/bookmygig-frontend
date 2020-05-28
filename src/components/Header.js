import React from 'react'

const Header = (props) => {
    return (
        <div className="container" style={styles.containerStyle}>
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
        float: 'right'
    },
    btnStyle: {
        float: 'right',
        marginRight: '75px'
    }
}

export default Header
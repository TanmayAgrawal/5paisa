import React from 'react'

class Test extends React.Component{
    render() {
        return (
            <div>
                Something {localStorage.getItem('isLogged')}
            </div>
        );
    }
}

export default Test;
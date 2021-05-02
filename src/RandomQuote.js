import React from 'react'

class RandomQuote extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            isLoaded: false,
            quote: 'Click a category to see a joke',
            error: null
        }
    }
    
    
    render() {
        const { error, isLoaded, quote } = this.state
        if(error) {
            return <p>Error: {error.message}</p>
        }
        else if(!isLoaded) {
            return <p>Loading... Please wait</p>
        }
        else {
            return <p>{quote}</p>
        }
    }
}

export default RandomQuote
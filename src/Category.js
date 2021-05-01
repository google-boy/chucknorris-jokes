import React from 'react'
class CategoryItem extends React.Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        const item = this.props.value
        return(
            item
        );
    }
}

class CategoryList extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.state = {
            isLoaded: false,
            error: null,
            items: []
        }
    }
    componentDidMount(){
        fetch('https://api.chucknorris.io/jokes/categories')
        .then(response => response.json())
        .then(result => {
            result = Object.values(result)
            this.setState ({
                isLoaded: true,
                items: result
            })
        },
        error => {
            this.setState ({
                isLoaded: true,
                error
            })
        }
        )
    }
    render(){
        const { isLoaded, error, items } = this.state;
        if (error) {
            return (
                <p>Error: {error.message}</p>
            )
        }
        else if (!isLoaded) {
            return <p>Loading... please wait</p>
        } 
        else {
            return (
                <ul className="App-list">
                    {items.map((item, index) => 
                        <li key={index} ><CategoryItem value={item} /></li>
                    )}
                
                </ul>
            )
        }
    }
}
export default CategoryList
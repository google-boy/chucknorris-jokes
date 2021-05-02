import React from 'react'

class CategoryItem extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        this.showQuote = this.showQuote.bind(this)
    }
    showQuote() {
        
        console.log(`${this.props.value} clicked`)
    }
    render(){
        const item = this.props.value
        return(
            <li><a href="#content" onClick={this.showQuote}>{item}</a></li>
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
              <div>
                  <h2>Joke Categories</h2>
                  <p>Error: {error.message} </p>
              </div> 
            )
        }
        else if (!isLoaded) {
            return (
                <div>
                    <h2>Joke Categories</h2>
                    <p>Loading... please wait</p>
                </div>
            )
        } 
        else {
            return (
                <div>
                    <h2>Joke Categories</h2>
                    <ul className="App-list">
                        {items.map((item, index) => 
                            <CategoryItem key={index} value={item} />
                        )}
                    
                    </ul>
                </div>
            )
        }
    }
}
export default CategoryList
import {Component} from 'react'

class Welcome extends Component {
    state = {name:[{name:"Krishna", age : 25}, {name:"tarak", age : 35}]}
    render() {
        return (
          <div>
            {this.state.name.map((each)=>
            <div key={each.name}> 
                <h1>{each.name} {each.age}</h1>
            </div>
            )}
          </div>
        )
    }
}

export default Welcome
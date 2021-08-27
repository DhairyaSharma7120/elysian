import React,{useContext} from 'react'
import styled from 'styled-components'
import { store } from '../../store'

function Homepage() {
    const stateObj = useContext(store)
    console.log(stateObj,"this is")
    const changeName = (username)=> {
        stateObj.dispatch({ type: "UPDATE_NAME", payload: {name: username} })
    }
    return (
        <HompageComponent>
            <div>{stateObj.state.user.name}<br/>
            <button onClick={()=>changeName(prompt("type name"))}>click</button>
            </div>
        </HompageComponent>
    )
}

export default Homepage



// styles using styled component


const HompageComponent = styled.div`
    width: 100%;
    height: 100%;
  display:grid;
  place-content: center;
    
    
`
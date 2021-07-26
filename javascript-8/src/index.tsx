import React from 'react'
import ReactDOM from 'react-dom'
import { App} from './components/app'

const RootElement : React.FC = ({children}) => (
    <div>
        {children}
    </div>
)

ReactDOM.render(
    <RootElement>
        <App />
     </RootElement>, 
    document.getElementById("root")
)

// class ErrorBoundary extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             hasError : false
//         }
//     }

//     render(){
//         return (<>
//         {this.state.hasError && <h2> SomeThing went Wrong</h2>}
//         {!this.state.hasError && <div className="container">
//             {props.children}
//             </div>}
//         </>)
//     }
// }

// <ErrorBoundary>
//     <HomePage />
// </ErrorBoundary>

import React, {useState, useRef} from 'react';

const App = () => {
    const currentRef = useRef({});

    const onClick = () => {
        currentRef.current.inc();
    }

    return(
        <div>
            <Counter num={1} refs={currentRef} />
            <button onClick={onClick}>Click Me</button>
        </div>
    );
}

const Counter = (props) => {
    const [num, setNum] = useState(props.num);

    props.refs.current.inc = () => {
        setNum((num)=> num + 1);
    }

    return (
        <h1>
            {num}
        </h1>
    );
}

export default App;
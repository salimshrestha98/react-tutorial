/**
 * Functions that return JSX are called Components.
 * Function name must be in PascalCase.
 * We can call the function name directly or,
 * Call as components <ComponentName />.
 * @returns
 */

function GetContent() {
    return (
        <>
            <h1>My Site Title</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </>
    )
}


// ReactDOM.render( GetContent(), document.getElementById('root'));
ReactDOM.render( <GetContent/>, document.getElementById('root'));
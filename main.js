/**
 * Challenge:
 * Create a custom Page component that returns an ordered list
 * of reasons why you are excited to learn react.
 */

function Page() {
    return (
        <>
            <h1>Reasons I love React:</h1>
            <ol>
                <li>I Want to build Single Page Apps.</li>
                <li>I want to get better at Frontend Development.</li>
            </ol>
        </>
    )
}
const root = document.getElementById('root');
ReactDOM.render( <Page />, root );
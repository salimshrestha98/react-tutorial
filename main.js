/**
 * Challenge:
 * Create a custom Page component that returns an ordered list
 * of reasons why you are excited to learn react.
 */

/**
 * Challenge 2:
 * To Add Header and Footer to our page.
 *
 */

function Header() {
    return (
        <header>
            <nav>
                <h1>My Site Title</h1>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            &copy; Salim Shrestha. All rights reserved.
        </footer>
    )
}

function Page() {
    return (
        <>
        <Header />
        <h1>Reasons I love React:</h1>
        <ol>
            <li>I Want to build Single Page Apps.</li>
            <li>I want to get better at Frontend Development.</li>
        </ol>
        <Footer />
        </>
    )
}
const root = document.getElementById('root');
ReactDOM.render( <Page />, root );
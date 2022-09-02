/**
 * Challenge:
 * Add Navigation menu
 */

function Header() {
    return (
        <header>
            <nav>
                <h1>My Site Title</h1>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
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

function MainContent() {
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

function Page() {
    return (
        <>
        <Header />
        <MainContent />
        <Footer />
        </>
    )
}
const root = document.getElementById('root');
ReactDOM.render( <Page />, root );
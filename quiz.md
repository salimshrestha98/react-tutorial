### Quiz

1. What is React Component?
-> A react component is a function that returns React elements.

2. What's wrong with this code?
'''
function myComponent() {
    return (
        <small>I'm tiny text!</small>
    )
}
'''
-> The function name must be in PascalCase. It  should be MyComponent.

3. What's wrong with this code?
'''
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(Header(), document.getElementById("root))
'''
-> Components must be called as <ComponentName /> not as functions.
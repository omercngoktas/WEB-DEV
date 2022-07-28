// ReactDOM.render(<h1>This is a test text!</h1>, document.getElementById("root"))

// ReactDOM.render(<ul><li>Test 1</li><li>Test 2</li></ul>, document.getElementById("ul-root"))

// function MainContent(){
//     return (
//         <nav className="maincontent">
//             <p>I'm learning React!</p>
//         </nav>
//     )
// }

// ReactDOM.render(<div><MainContent/></div>, document.getElementById("root"))

// const h1 = document.createElement("h1")
// h1.textContent = "This is a text which created by me."
// h1.className = "header"
// document.getElementById("root").append(h1)

// const element = <h1 className = "header">This is a text.</h1>
// console.log(element)
// ReactDOM.render(element, document.getElementById("root"))

// ReactDOM.render(
//     <div>
//         <h1 className="header">This is a text</h1>
//         <p>Hello World!</p>
//     </div>,
//     document.getElementById("root")
// )

const NavBar = (
    <nav>
        <h1>This is a Brand!</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(NavBar, document.getElementById("root"))
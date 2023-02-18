import {Link} from "react-router-dom";

export default function HeaderMain() {
    return (
        <header>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to='/slideone'>SlideOne</Link>
                </li>
                <li>
                      <Link to='/slidetwo'>SlideTwo</Link>
                </li>
            </ul>
        </header>
    )
}
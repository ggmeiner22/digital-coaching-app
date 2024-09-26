import { Link } from "react-router-dom";
import useStyles from "../Style/Style";

export default function Navigation() {
    const classes = useStyles();

    let links = [
        { href: "/", text: "About" },
        { href: "/home", text: "Team Homepage" },
        { href: "/contact", text: "Contact" },
        { href: "/firstsemester", text: "First Semester" },
        { href: "/secondsemester", text: "Second Semester" }
    ];

    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li key={link.href}>
                        <Link to={link.href}>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

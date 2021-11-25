import { useParams } from "react-router"

export default function About(): JSX.Element {
    let { name } = useParams()

    return (
        <h1>About {name}</h1>
    )
}
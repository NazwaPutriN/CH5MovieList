import { render, screen } from "@testing-library/react"
import LandingPage from "./LandingPage"

const dummyMovie = {
    id : 5,
    backdrop_path : 5,
    title : 'dummy move',
    name : 'dummy movie',
    overview : 'Lorem ipsum '
}

test("trailer button exists", () => {
    render(<LandingPage movie={dummyMovie}/>)
    const button = screen.getByText('WATCH TRAILER')
    expect(button).toBeInTheDocument()
})
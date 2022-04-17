import { render, screen } from "@testing-library/react"
import { UseContext } from "../UseContext"

test.skip("renders learn react link", () => {
  render(<UseContext />)
  const linkElement = screen.getByText(/User: John/i)
  expect(linkElement).toBeInTheDocument()
})

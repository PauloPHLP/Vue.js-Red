import { render } from '@testing-library/vue'
import Home from '../../views/Home'

describe('Home', () => {
  test('Renders Home without crashing and with the correct properties', () => {
    const { container, getByText } = render(Home)

    expect(container).toBeTruthy()
    expect(getByText('Initial page')).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle(`background-color: darkgray;`)
  })
})

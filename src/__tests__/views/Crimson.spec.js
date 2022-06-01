import { render } from '@testing-library/vue'
import Crimson from '../../views/Crimson'

describe('Crimson', () => {
  test('Renders Crimson without crashing and with the correct properties', () => {
    const { container, getByText } = render(Crimson)

    expect(container).toBeTruthy()
    expect(getByText('Crimson page')).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle(`background-color: crimson;`)
  })
})

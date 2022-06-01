import { render } from '@testing-library/vue'
import DarkRed from '../../views/DarkRed'

describe('DarkRed', () => {
  test('Renders DarkRed without crashing and with the correct properties', () => {
    const { container, getByText } = render(DarkRed)

    expect(container).toBeTruthy()
    expect(getByText('Dark Red page')).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle(`background-color: darkred;`)
  })
})

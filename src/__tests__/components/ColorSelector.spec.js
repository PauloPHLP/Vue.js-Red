import { render } from '@testing-library/vue'
import ColorSelector from '../../components/ColorSelector'

describe('ColorSelector', () => {
  test('Renders ColorSelector without crashing', () => {
    const { container } = render(ColorSelector)

    expect(container).toBeTruthy()
  })

  test('Renders all three buttons on the list', () => {
    const { getByText } = render(ColorSelector)

    expect(getByText('Initial')).toBeInTheDocument()
    expect(getByText('Crimson')).toBeInTheDocument()
    expect(getByText('Dark red')).toBeInTheDocument()
  })
})

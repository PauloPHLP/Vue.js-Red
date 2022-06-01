import { render } from '@testing-library/vue'
import App from '../App.vue'

describe('App', () => {
  test('Renders App without crashing', () => {
    const { container } = render(App)

    expect(container).toBeTruthy()
  })
})

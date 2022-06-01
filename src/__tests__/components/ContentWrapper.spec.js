import { render } from '@testing-library/vue'
import ContentWrapper from '../../components/ContentWrapper'

describe('ContentWrapper', () => {
  test('Renders ContentWrapper without crashing and with the correct properties', () => {
    const { container, getByText } = render(ContentWrapper, {
      props: {
        backgroundColor: 'darkred'
      },
      slots: {
        children: <div>Content Wrapper</div>
      }
    })

    expect(container).toBeTruthy()
    expect(getByText('Content Wrapper')).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle(`background-color: darkred;`)
  })

  test('Renders ContentWrapper with correct texts', () => {
    const { container, getByText } = render(ContentWrapper, {
      props: {
        backgroundColor: 'darkred'
      },
      slots: {
        children: <div>Content Wrapper</div>
      }
    })

    expect(getByText('Vue.js')).toBeInTheDocument()
    expect(getByText('Welcome to the Red app!')).toBeInTheDocument()
    expect(getByText('Please, select a Red shade')).toBeInTheDocument()
  })
})

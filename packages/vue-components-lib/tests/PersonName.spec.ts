import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import PersonName from '../src/components/PersonName.vue'

describe('PersonName', () => {
  it('renders properly', () => {
    const wrapper = mount(PersonName, { props: { person: {
      firstName: 'First',
      lastName: 'Last'
    } } })
    expect(wrapper.text()).toContain('First Last')
  })
})

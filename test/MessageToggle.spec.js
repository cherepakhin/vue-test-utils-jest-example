import { shallowMount } from '@vue/test-utils'
import MessageToggle1 from '@/components/MessageToggle1.vue'
import Message from '@/components/Message.vue'

describe('MessageToggle.vue', () => {
  it('toggles msg passed to Message when button is clicked', () => {
    const wrapper = shallowMount(MessageToggle1)
    const button = wrapper.find('#btn-message')
    button.trigger('click')
    const MessageComponent = wrapper.find(Message)
    expect(MessageComponent.props()).toEqual({msg: 'message'})
    button.trigger('click')
    expect(MessageComponent.props()).toEqual({msg: 'toggled message'})
  })
})

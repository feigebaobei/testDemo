import { mount } from '@cypress/vue'
import MsgTip from './MsgTip.vue'
it('renders a message', () => {
  mount(MsgTip, {
    props: {
      msg: 'Hello Cypress!',
    },
  })
  cy.get('p').contains('Hello Cypress!')
})
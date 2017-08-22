import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/sign'
import Message from '@/pages/message/message'
import Contact from '@/pages/contact/contact'
import Space from '@/pages/space/space'
import More from '@/pages/space/more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Sign
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/space',
      component: Space
    },
    {
      path: '/more',
      component: More
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/sign'
import Message from '@/pages/message/message'
import Contact from '@/pages/contact/contact'
import Space from '@/pages/qqspace/space'
import More from '@/pages/qqspace/more'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sign',
      component: Sign
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/space',
      name: 'space',
      component: Space
    },
    {
      path: '/more',
      name: 'more',
      component: More
    }
  ]
})

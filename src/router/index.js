import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/sign'
import Message from '@/pages/message/message'
import Contact from '@/pages/contact/contact'
import Qqspace from '@/pages/qqspace/qqspace'
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
      path: '/qqspace',
      name: 'qqspace',
      component: Qqspace
    },
    {
      path: '/more',
      name: 'more',
      component: More
    }
  ]
})

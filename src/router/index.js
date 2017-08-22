import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/sign'
import Message from '@/pages/message/message'
import Contact from '@/pages/contact/contact'
import Space from '@/pages/qqspace/space'
import More from '@/pages/qqspace/more'
import Friend from '@/pages/contact/friends/friends'
import Group from '@/pages/contact/group/group'
import Mynotes from '@/pages/contact/mynotes/mynotes'
import Myphone from '@/pages/contact/myphone/myphone'
import Ourchat from '@/pages/contact/ourchat/ourchat'

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
      component: Contact,
      children: [
        {
          path: '/friend',
          name: 'friend',
          component: Friend
        },
        {
          path: '/group',
          name: 'group',
          component: Group
        },
        {
          path: '/mynotes',
          name: 'mynotes',
          component: Mynotes
        },
        {
          path: '/myphone',
          name: 'myphone',
          component: Myphone
        },
        {
          path: '/ourchat',
          name: 'ourchat',
          component: Ourchat
        }
      ]
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

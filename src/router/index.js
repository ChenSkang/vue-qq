import Vue from 'vue'
import Router from 'vue-router'
import Sign from '@/components/sign'
import Message from '@/pages/message/message'
import Contact from '@/pages/contact/contact'
import Space from '@/pages/space/space'
import More from '@/pages/space/more'
import Chat from '@/pages/chat/chat'
import User from '@/pages/users/users'
import Myself from '@/pages/users/myself'
import Newfriend from '@/pages/newfriends/newfriends'
import Addfriend from '@/pages/addfriends/addfriends'
import Circle from '@/pages/space/circle'
import Nearby from '@/pages/space/nearby'
import Hobby from '@/pages/space/hobby'
import Game from '@/pages/game/game'
import Left from '@/pages/left/left'
import Erweima from '@/pages/erweima/erweima'
import Setup from '@/pages/setup/setup'
import Manage from '@/pages/setup/manage'
import File from '@/pages/files/files'
import Setgroup from '@/pages/setgroup/setgroup'
import Groups from '@/pages/setgroup/groups'
import Computer from '@/pages/chat/Computer'

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
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/myself',
      component: Myself
    },
    {
      path: '/newfriend',
      component: Newfriend
    },
    {
      path: '/addfriend',
      component: Addfriend
    },
    {
      path: '/circle',
      component: Circle
    },
    {
      path: '/nearby',
      component: Nearby
    },
    {
      path: '/hobby',
      component: Hobby
    },
    {
      path: '/game',
      component: Game
    },
    {
      path: '/left',
      component: Left
    },
    {
      path: '/erweima',
      component: Erweima
    },
    {
      path: '/setup',
      component: Setup
    },
    {
      path: '/manage',
      component: Manage
    },
    {
      path: '/file',
      component: File
    },
    {
      path: '/setgroup',
      component: Setgroup
    },
    {
      path: '/groups',
      component: Groups
    },
    {
      path: '/computer',
      component: Computer
    }
  ]
})

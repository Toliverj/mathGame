import {atom} from 'recoil'
import io from 'socket.io-client'

export const socket = atom({
    key: 'socket',
    default: io('http://localhost:4000')
})
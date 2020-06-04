import { createContext } from 'react'

export const defaultContext = {
  setDebug:() => {
    return({
      debug: {
        border: '1px solid red'
      }
    })

  },

  initialState: {
      debug: false
  },

  dispatch: () => { },
  reducer: (state, action) => {
    switch (action.type) {
      case 'debug':
        console.log('test')
    }
  },
}

export default createContext(defaultContext)
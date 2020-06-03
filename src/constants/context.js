import { createContext } from 'react'

export const defaultContext = {
  initialState: {

  },

  dispatch: () => { },
  reducer: (state, action) => {
    switch (action.type) {
      case 'JUMP IN AIR':
        console.log('I jumped in the air')
    }
  },
}

export default createContext(defaultContext)
import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

const middlewares = applyMiddleware(sagaMiddleware)

const devToolsEnhancer =
  process.env.NODE_ENV === 'development' && (window as any).devToolsExtension
    ? (window as any).devToolsExtension()
    : undefined

const enhancers = devToolsEnhancer
  ? compose(
      middlewares,
      devToolsEnhancer,
    )
  : compose(middlewares)

const store = createStore(reducers, {}, enhancers)

sagaMiddleware.run(sagas)

export default store

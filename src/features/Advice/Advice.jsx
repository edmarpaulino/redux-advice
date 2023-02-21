import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAdvice,
  selectAdvice,
  selectAdviceError,
  selectAdviceStatus,
} from './adviceSlice'

const Advice = () => {
  const dispatch = useDispatch()
  const advice = useSelector(selectAdvice)
  const adviceStatus = useSelector(selectAdviceStatus)
  const adviceError = useSelector(selectAdviceError)

  let content
  if (adviceStatus === 'loading') {
    content = <p>Loading...</p>
  } else if (adviceStatus === 'succeeded') {
    content = <p>{advice}</p>
  } else {
    content = (
      <p>
        Something goes wrong... <br /> {adviceError}
      </p>
    )
  }

  const getNewAdvice = () => {
    dispatch(fetchAdvice())
  }

  return (
    <div className="Advice">
      {content} <button onClick={getNewAdvice}>New advice</button>
    </div>
  )
}

export default Advice

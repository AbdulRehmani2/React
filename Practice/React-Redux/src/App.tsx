import { connect, useSelector, useDispatch } from "react-redux"
import { addCount, decCount } from "./redux/count/countActions"
import { addSCount, minSCount } from "./redux/secondCounter/scountActions"
import { useState } from "react"

// type Props = {
// 	count: number,
// 	addCount: Function
// }

type State = {
	count: {count: number},
	scount: {scount: number}
}

// function App(props: Props) {
//   return (
// 	<div>
// 		<p>{props.count}</p>
// 		<button onClick={() => props.addCount()}>Add Count</button>
// 	</div>
//   )
// }

// function mapStateToProps(state: State)
// {
// 	return {
// 		count: state.count
// 	}
// }

// function mapDispactchToProps(dispatch: Function)
// {
// 	return {
// 		addCount: () => dispatch(addCount())
// 	}
// }

// export default connect(
// 	mapStateToProps,
// 	mapDispactchToProps
// )(App)

function App() {
	const count = useSelector((state: State) => state.count.count)
	const scount = useSelector((state: State) => state.scount.scount)
	const dispatch = useDispatch()
	const [value, setValue] = useState(0)

  return (
  <>
  	<div>
		<p>{count}</p>
		<button onClick={() => dispatch(addCount())}>Add Count</button>
		<button onClick={() => dispatch(decCount())}>Dec Count</button>
	</div>
	<div>
	<p>{scount}</p>
		<input type="text" value={value} onChange={(e) => setValue(Number(e.target.value))} />
		<button onClick={() => dispatch(addSCount(value))}>Add Count</button>
		<button onClick={() => dispatch(minSCount(value))}>Dec Count</button>
	</div>
  </>
  )
}

export default App
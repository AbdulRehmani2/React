import { useEffect, useState } from "react"
import axios from "axios"

interface User{
	name:string,
	username: string,
	email:string,
	address:string,
	company:string
}

function App() {

	const [userID, setUserId] = useState(2);
	const [user, setUser] = useState<User | null>()
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {

		// function getData(url: string)
		// {
		// 	fetch(url)
		// 	.then((res) => res.json()
		// 		.then((result) => {getUserData(result); setIsVisible(false)})
		// 		.catch((err) => alert(err))
		// 	.catch((err) => alert(err)))
		// }

		function getData(url: string)
		{
			axios.get(url)
			.then((result) => {getUserData(result.data); setIsVisible(false)})
			.catch((err) => alert(err))
		} 

		setIsVisible(true)
		const url = `https://jsonplaceholder.typicode.com/users/${userID}`
		getData(url)
	}, [userID])

	function getUserData(result: any)
	{
		const User:User = {
			name: result.name,
			username: result.username,
			email: result.email,
			address: result.address.street + ", " + result.address.city,
			company: result.company.name
		} 
		setUser(User)
	}

	return (
		<div className="main-container">
			<h2>User</h2>
			<p><span>Name: </span>{user?.name}</p>
			<p><span>Username: </span>{user?.username}</p>
			<p><span>Email: </span>{user?.email}</p>
			<p><span>Address: </span>{user?.address}</p>
			<p><span>Company: </span>{user?.company}</p>
			<div className="button-container">
				<button onClick={() => {setUserId(prev => prev == 1 ? 10 : prev - 1)}}>Prev User</button>
				<button onClick={() => {setUserId(prev => prev == 10 ? 1 : prev + 1)}}>Next User</button>
			</div>
			<p className={isVisible ? "" : 'hide'}>Loading...</p>
		</div>
	)
}

export default App

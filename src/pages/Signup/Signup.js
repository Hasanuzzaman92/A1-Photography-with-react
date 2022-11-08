import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="w-full mx-auto my-16 bg-yellow-100 max-w-md p-8 space-y-3 rounded-xl dark:dark:bg-gray-900 dark:dark:text-gray-100">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
		<div className="space-y-1 text-sm">
			<label for="name" className="block dark:dark:text-gray-400">Name:</label>
			<input type="text" name="name" id="name" placeholder="Name" className="w-full px-4 py-3 rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-sky-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="email" className="block dark:dark:text-gray-400">Email:</label>
			<input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-sky-400" />
		</div>
		<div className="space-y-1 text-sm">
			<label for="password" className="block dark:dark:text-gray-400">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:dark:border-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100 focus:dark:dark:border-sky-400" />
			<div className="flex justify-end text-xs dark:dark:text-gray-400">
			</div>
		</div>
		<button className="block w-full bg-yellow-400 font-bold p-3 text-center rounded-sm">Log in</button>
	</form>
	
	
	<p className="text-sm text-center sm:px-6 dark:dark:text-gray-400">Already have an account? {' '}
		<Link rel="noopener noreferrer" to="/login" className="underline dark:dark:text-gray-100">Log in</Link>
	</p>
</div>
    );
};

export default Signup;
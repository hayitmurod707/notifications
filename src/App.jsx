import React from 'react';
import styled from 'styled-components';
import Notifications, { showNotification } from './Notifications';
const Button = styled.button`
	border-radius: 8px;
	border: none;
	color: #ffffff;
	cursor: pointer;
	font-size: 16px;
	height: 48px;
	margin: 0 10px;
	outline: none;
	width: 200px;
`;
const App = () => (
	<>
		<section>
			<h1 style={{ textAlign: 'center' }}>
				Notifications component with react-toastify
			</h1>
			<h1 style={{ textAlign: 'center' }}>
				<Button
					style={{ backgroundColor: '#0000ff' }}
					onClick={() =>
						showNotification({ message: 'Info message', type: 'info' })
					}
				>
					Info
				</Button>
				<Button
					style={{ backgroundColor: '#0000ff' }}
					onClick={() =>
						showNotification({
							autoClose: true,
							message: 'Info message',
							type: 'info',
						})
					}
				>
					Auto Close Info
				</Button>
			</h1>
			<h1 style={{ textAlign: 'center' }}>
				<Button
					style={{ backgroundColor: '#ff0000' }}
					onClick={() =>
						showNotification({ message: 'Error message', type: 'error' })
					}
				>
					Error
				</Button>
				<Button
					style={{ backgroundColor: '#ff0000' }}
					onClick={() =>
						showNotification({
							autoClose: true,
							message: 'Error message',
							type: 'error',
						})
					}
				>
					Auto Close Error
				</Button>
			</h1>
			<h1 style={{ textAlign: 'center' }}>
				<Button
					style={{ backgroundColor: '#ffff00' }}
					onClick={() =>
						showNotification({
							message: 'Warning message',
							type: 'warning',
						})
					}
				>
					Warning
				</Button>
				<Button
					style={{ backgroundColor: '#ffff00' }}
					onClick={() =>
						showNotification({
							autoClose: true,
							message: 'Warning message',
							type: 'warning',
						})
					}
				>
					Auto Close Warning
				</Button>
			</h1>
			<h1 style={{ textAlign: 'center' }}>
				<Button
					style={{ backgroundColor: '#008000' }}
					onClick={() =>
						showNotification({
							message: 'Success message',
							type: 'success',
						})
					}
				>
					Success
				</Button>
				<Button
					style={{ backgroundColor: '#008000' }}
					onClick={() =>
						showNotification({
							autoClose: true,
							message: 'Success message',
							type: 'success',
						})
					}
				>
					Auto Close Success
				</Button>
			</h1>
			<h1 style={{ textAlign: 'center' }}>
				<Button
					style={{ backgroundColor: 'grey' }}
					onClick={() =>
						showNotification({
							message: 'Default message',
							type: 'default',
						})
					}
				>
					Default
				</Button>
				<Button
					style={{ backgroundColor: 'grey' }}
					onClick={() =>
						showNotification({
							autoClose: true,
							message: 'Default message',
							type: 'default',
						})
					}
				>
					Auto Close Default
				</Button>
			</h1>
		</section>
		<Notifications />
	</>
);
export default App;

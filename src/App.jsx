import { Fragment } from 'react';
import styled from 'styled-components';
import Notifications from './Notifications';
import notification from './notification';
const Button = styled.button`
   border-radius: 12px;
   border: none;
   color: #ffffff;
   cursor: pointer;
   font-size: 17px;
   height: 52px;
   margin: 0 10px;
   outline: none;
   width: 200px;
`;
const App = () => (
   <Fragment>
      <section>
         <h1 style={{ textAlign: 'center' }}>
            Notification with react-toastify
         </h1>
         <h4 style={{ textAlign: 'center' }}>
            <a href='https://github.com/hayitmurod707/notifications'>Github</a>
         </h4>
         <div
            style={{
               alignItems: 'center',
               display: 'flex',
               justifyContent: 'center',
               margin: '20px 0',
            }}
         >
            <Button
               style={{ backgroundColor: '#0163f7' }}
               onClick={() => notification('Info message', { type: 'info' })}
            >
               Info
            </Button>
            <Button
               style={{ backgroundColor: '#0163f7' }}
               onClick={() =>
                  notification('Info message', {
                     autoClose: true,
                     type: 'info',
                  })
               }
            >
               Auto Close Info
            </Button>
         </div>
         <div
            style={{
               alignItems: 'center',
               display: 'flex',
               justifyContent: 'center',
               margin: '20px 0',
            }}
         >
            <Button
               style={{ backgroundColor: '#ff3b3c' }}
               onClick={() => notification('Error message', { type: 'error' })}
            >
               Error
            </Button>
            <Button
               style={{ backgroundColor: '#ff3b3c' }}
               onClick={() =>
                  notification('Error message', {
                     autoClose: true,
                     type: 'error',
                  })
               }
            >
               Auto Close Error
            </Button>
         </div>
         <div
            style={{
               alignItems: 'center',
               display: 'flex',
               justifyContent: 'center',
               margin: '20px 0',
            }}
         >
            <Button
               style={{ backgroundColor: '#feda04' }}
               onClick={() =>
                  notification('Warning message', {
                     type: 'warning',
                  })
               }
            >
               Warning
            </Button>
            <Button
               style={{ backgroundColor: '#feda04' }}
               onClick={() =>
                  notification('Warning message', {
                     autoClose: true,
                     type: 'warning',
                  })
               }
            >
               Auto Close Warning
            </Button>
         </div>
         <div
            style={{
               alignItems: 'center',
               display: 'flex',
               justifyContent: 'center',
               margin: '20px 0',
            }}
         >
            <Button
               style={{ backgroundColor: '#3bc148' }}
               onClick={() =>
                  notification('Success message', {
                     type: 'success',
                  })
               }
            >
               Success
            </Button>
            <Button
               style={{ backgroundColor: '#3bc148' }}
               onClick={() =>
                  notification('Success message', {
                     autoClose: true,
                     type: 'success',
                  })
               }
            >
               Auto Close Success
            </Button>
         </div>
         <div
            style={{
               alignItems: 'center',
               display: 'flex',
               justifyContent: 'center',
               margin: '20px 0',
            }}
         >
            <Button
               style={{ backgroundColor: '#a1a1aa' }}
               onClick={() =>
                  notification('Default message', {
                     type: 'default',
                  })
               }
            >
               Default
            </Button>
            <Button
               style={{ backgroundColor: '#a1a1aa' }}
               onClick={() =>
                  notification('Default message', {
                     autoClose: true,
                     type: 'default',
                  })
               }
            >
               Auto Close Default
            </Button>
         </div>
      </section>
      <Notifications />
   </Fragment>
);
export default App;

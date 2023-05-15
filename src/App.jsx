import styled from 'styled-components';
import Notifications from './Notifications';
import notification from './notification';
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
               style={{ backgroundColor: '#0071f2' }}
               onClick={() => notification('Info message', { type: 'info' })}
            >
               Info
            </Button>
            <Button
               style={{ backgroundColor: '#0071f2' }}
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
               style={{ backgroundColor: '#ea1601' }}
               onClick={() => notification('Error message', { type: 'error' })}
            >
               Error
            </Button>
            <Button
               style={{ backgroundColor: '#ea1601' }}
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
               style={{ backgroundColor: '#fad202' }}
               onClick={() =>
                  notification('Warning message', {
                     type: 'warning',
                  })
               }
            >
               Warning
            </Button>
            <Button
               style={{ backgroundColor: '#fad202' }}
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
               style={{ backgroundColor: '#008000' }}
               onClick={() =>
                  notification('Success message', {
                     type: 'success',
                  })
               }
            >
               Success
            </Button>
            <Button
               style={{ backgroundColor: '#008000' }}
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
               style={{ backgroundColor: 'grey' }}
               onClick={() =>
                  notification('Default message', {
                     type: 'default',
                  })
               }
            >
               Default
            </Button>
            <Button
               style={{ backgroundColor: 'grey' }}
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
   </>
);
export default App;

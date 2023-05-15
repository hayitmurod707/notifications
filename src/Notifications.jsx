import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled, { createGlobalStyle } from 'styled-components';
import Sound from './notification.mp3';
const defaultOptions = {
   // autoClose: false, // false or number millisecond
   // bodyClassName: '', // string
   // className: '', // string
   // closeButton: <CloseButton />, // false or ReactNode
   // closeOnClick: true, // boolean
   // containerId: '', // string
   // draggable: true, // boolean
   // draggableDirection: 'x', // x or y
   // draggablePercent: 80, // number from 0 to 100
   // enableMultiContainer: '', // boolean
   // hideProgressBar: false, // boolean
   // limit: '', // Integer number
   // newestOnTop: false, // boolean
   // pauseOnFocusLoss: true, // boolean
   // pauseOnHover: true, // boolean
   // position: 'top-right', // string
   // progressClassName: '', // string
   // progressStyle: {}, // object
   // role: 'alert', // string
   // rtl: false, // boolean
   // style: {}, // object
   // theme: 'light', // string oneOf ['light', 'dark']
   // toastClassName: '', // string
   // transition: Slide, // oneOf [Slide, Bounce, Zoom, Flip]
   newestOnTop: true, // boolean
   transition: Bounce,
   theme: 'dark',
};
const Styles = createGlobalStyle`
	:root {
		--toastify-color-light: #ffffff;
		--toastify-color-dark: #001833;
		--toastify-color-info: #0071F2;
		--toastify-color-success: #64BC26;
		--toastify-color-warning: #FAD202;
		--toastify-color-error: #EA1601;
		--toastify-color-default: #808080;

		--toastify-icon-color-info: var(--toastify-color-info);
		--toastify-icon-color-success: var(--toastify-color-success);
		--toastify-icon-color-warning: var(--toastify-color-warning);
		--toastify-icon-color-error: var(--toastify-color-error);
		
		--toastify-text-color-info: var(--toastify-color-light);
		--toastify-text-color-success: var(--toastify-color-light);
		--toastify-text-color-warning: var(--toastify-color-light);
		--toastify-text-color-error: var(--toastify-color-light);
		
		--toastify-color-progress-info: var(--toastify-color-info);
		--toastify-color-progress-success: var(--toastify-color-success);
		--toastify-color-progress-warning: var(--toastify-color-warning);
		--toastify-color-progress-error: var(--toastify-color-error);
		
		--toastify-color-transparent: rgba(255, 255, 255, 0.7);
		--toastify-toast-background: var(--toastify-color-light);
		--toastify-text-color-light: var(--toastify-color-dark);
		--toastify-text-color-dark: var(--toastify-color-light);

		--toastify-spinner-color: var(--toastify-color-default);
		--toastify-spinner-color-empty-area: var(--toastify-color-dark);
		--toastify-color-progress-light: var(--toastify-color-dark);
		--toastify-color-progress-dark: var(--toastify-color-light);
		--toastify-shadow-light: rgba(13, 46, 105, 0.08);
		--toastify-shadow-dark: rgba(245, 250, 255, 0.1);
	}
`;
const StyledElement = styled.section`
   & audio {
      display: none;
   }
   & .Toastify__toast-container {
      padding: 0;
      right: 20px;
      top: 20px;
      &.Toastify__toast-theme--light {
         box-shadow: 0 1px 10px 0 var(--toastify-shadow-light),
            0 1px 10px 0 var(--toastify-shadow-light);
      }
      &.Toastify__toast-theme--dark {
         box-shadow: 0 1px 10px 0 var(--toastify-shadow-dark),
            0 1px 10px 0 var(--toastify-shadow-dark);
      }
      & .Toastify__toast {
         border-radius: 14px;
         font-family: 'Gilroy', sans-serif !important;
         font-size: 15px;
         font-weight: 600;
         padding: 14px;
         &:last-child {
            margin: 0;
         }
         & .Toastify__toast-body {
            margin: 0;
            padding: 0 !important;
            width: 100%;
         }
         & .Toastify__toast-close {
            align-items: center;
            border-radius: 50%;
            border: none;
            cursor: pointer;
            display: flex;
            height: 21px;
            justify-content: center;
            outline: none;
            padding: 0;
            position: absolute;
            right: -10px;
            top: -10px;
            width: 21px;
            &[data-type='success'] {
               background-color: #64bc26;
            }
            &[data-type='info'] {
               background-color: #0071f2;
            }
            &[data-type='error'] {
               background-color: #ea1601;
            }
            &[data-type='warning'] {
               background-color: #fad202;
            }
            &[data-type='default'] {
               background-color: #808080;
            }
         }
      }
   }
`;
const Notifications = () => (
   <StyledElement>
      <ToastContainer {...defaultOptions} />
      <Styles />
      <audio src={Sound} id='react-toastify-sound' />
   </StyledElement>
);
export default Notifications;

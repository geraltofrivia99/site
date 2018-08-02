import React from 'react';
import Main from './containers/mainPage';
// import './index.css';
import { injectGlobal } from 'styled-components';
// import PersistentDrawer from './components/Navbar/sidemenu';
// import styled from 'styled-components';
import NavBar from './components/Navbar/navBar';

injectGlobal`
html,legend{-webkit-box-sizing:border-box}button,hr,input{overflow:visible}audio,canvas,progress,video{display:inline-block}progress,sub,sup{vertical-align:baseline}html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow-x:hidden}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}body{margin:0}article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block}h1{font-size:2em;margin:.67em 0}figure{margin:1em 40px}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects;text-decoration:none}abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{padding:.35em .75em .625em}legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}[hidden],template{display:none}
body {
	/*font-family: -apple-system,BlinkMacSystemFont,Roboto,Open Sans,Helvetica Neue,sans-serif;*/
	font-family: Avenir, Verdana, sans-serif;
	font-size: 18px;
	line-height: 1.67;
	color: #2c3252;
	background-color: #fff;
	font-weight: 400;
	min-width: 320px;
	-webkit-font-smoothing: antialiased;
	margin: 0;
	overflow-x: hidden;
}
`;

const App = () => (
  <React.Fragment>
        <NavBar />
        <Main/> 
  </React.Fragment>
);

export default (App)

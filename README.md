# Streamlit Component using React
This repository contains login component code for creating [Streamlit](https://docs.streamlit.io/) Components using [React](https://react.dev/).

> Assuming all prerequisites are installed, to run Streamlit project in your system. If not, follow instruction given on [Install Streamlit](https://docs.streamlit.io/library/get-started/installation) to install Streamlit.

## Steps to run Streamlit component on React development server.
1. Start React Application on development server using below command on terminal:
```
cd login_component
npm install
npm start
```
After this step, react application server has started on [localhost:3001](http://localhost:3001).


2. Starting development server for running Streamlit Component using below command on new terminal:
```
streamlit run __init__.py
```
Now streamlit component has started on [localhost:8501](http://localhost:8501)

## Steps to run Streamlit component using React production build.
1. Create React Application production build using below command on terminal:
```
cd login_component
npm run build
```
Above step will create a `/build` folder inside `/login_component`.

2. Edit `__init__.py`(line number 5), update variable `_RELEASE = True`. 

3. Starting development server for running Streamlit Component using below command on new terminal:
```
streamlit run __init__.py
```
-Now streamlit component has started on [localhost:8501](http://localhost:8501)

## Things covered
- Mobile Responsive  
- Reusable React Code
- Reusable CSS Code
- Scalable folder structure

## Library/Plugins used
- [React](https://react.dev/)
- [Material UI](https://mui.com/)
- [Streamlit Component Library](https://www.npmjs.com/package/streamlit-component-lib)

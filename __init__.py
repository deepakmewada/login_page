import os
import streamlit.components.v1 as components
import streamlit as st

_RELEASE = False
st.set_page_config(
    page_title="Samooha Assigment",
    layout="wide",
)

if not _RELEASE:
    _login_component_ = components.declare_component(
        "samooha",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "login_component/build")
    _login_component_ = components.declare_component("samooha", path=build_dir)

submittedValue = _login_component_()
st.write(submittedValue)

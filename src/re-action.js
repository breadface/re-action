
import React from 'react'
import { connect } from 'react-redux'

export class LifeCycle extends React.Component {
  props: {
    children?: React.Element,
    componentDidMount?: () => void
  }

  componentDidMount(){
    if(this.props.componentDidMount){
      this.props.componentDidMount()
    }
  }

  render(){
    return this.props.children || null
  }
}

export class Void extends React.Component {
  render(){
    return null
  }
}

export const ReAction = connect(null, (dispatch, props) => {
  return {
    action: (...args) => {
      return dispatch(props.action(...args))
    }
  }
})(props => props.children ? props.children(props.action) : <EmptyC /> )


export const ReData = connect((state, props) => {
  return {
    data: props.mapState(state)
  }
})(props => props.children(props.data))

import logo from './logo.svg';
import './App.css';
import { marked } from 'marked';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      htmlStr: ""
    }
    this.stateUpdater = this.stateUpdater.bind(this)
  }

  stateUpdater(event){
    this.setState({htmlStr:event.target.value})
  }

  render(){
    // const str = marked.parse('# Marked in the browser \n Rendered by **marked**.\n # a \n ## a \n ### a \n -a')
    
    return(
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center' style={{background:'#87B5B5',minHeight:'100vh'}}>
        <Editor updater={this.stateUpdater}/>
        <Previever htmlStr={marked.parse(this.state.htmlStr)} />
      </div>
    )
  }
}

const Editor = (props) => {
  return (
    <div className='card mt-5 shadow-lg border border-2 border-dark'>
      <div className='card-header' style={{background:'#4AA2A2',height:'30px',padding:'0px 0px 5px 10px', fontSize:'20px'}}><strong>Editor</strong><i class="fa-solid fa-maximize" style={{right:'10px',top:'4px',position:'absolute'}}></i></div>
      <div className='card-body p-0' style={{background:'#C0D8D8',fontSize:'14px'}}>
        <textarea id='editor' onChange={props.updater} cols={70} rows={12} style={{background:'#C0D8D8',fontFamily:'Source Code Pro'}}></textarea>
      </div>
    </div>
  )
}

const Previever = (props) => {
  return (
    <div id='preview' className='card m-5 shadow-lg border border-2 border-dark' style={{fontSize:'20px',overflow:'hidden'}}>
      <div className='card-header' style={{background:'#4AA2A2',height:'30px',padding:'0px 0px 10px 10px'}}><strong>Previever</strong><i class="fa-solid fa-maximize" style={{right:'10px',top:'4px',position:'absolute'}}></i> </div>
      <div className='card-body p-' style={{background:'#C0D8D8',width:'800px'}} dangerouslySetInnerHTML={{__html:props.htmlStr}} />
        
    </div>
  )
}


export default App;

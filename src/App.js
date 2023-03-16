import React from 'react';
import './App.css';
import {marked} from 'marked';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `##### This is a Markdown editor & previewer. Here is a cheatsheet of useful syntax:

# Header 1
## Header 2

**bold text**

- list item
- list item

\`inline code\`

\`\`\`
code block
\`\`\`

> blockquote

[(link to) google.com](google.com)

![alt text](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-R2RiAjs5caY%2FT9mfIIDckFI%2FAAAAAAAABR0%2FY4m4U8YulWQ%2Fs1600%2FOcelot%2BUnique%2B04.jpg&f=1&nofb=1&ipt=4f3c78371b47f60f794ec2b02bd669d9de78b4f4a04591dc23413172ab06080d&ipo=images)

`
    }

    this.handleChange = this.handleChange.bind(this);
  }



  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }


  render() {

    return (
      <div className="App" style={{backgroundColor: 'rgb(73, 73, 73)'}}>
        <h1 id='title'>Markdown Editor</h1>
        <div className="container-fluid">
        <TitleRow />
          <div className='row'>
            <div className='col m-4 p-4' id='col1'>
              <textarea id='editor' placeholder="type here..." value={this.state.input} onChange={this.handleChange}>{this.state.input}></textarea>
            </div>
            <div className='col m-4 p-4' id='preview' dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></div>
          </div>
        </div>
      </div>
    )
  }
}


const TitleRow = () => {
  return (
    <div className='row'>
      <div className='col subtitle'><h2>Editor</h2></div>
      <div className='col subtitle'><h2>Preview</h2></div>
    </div>
  )
}

import React, { PureComponent, Fragment } from 'react';
import Upload from 'package_upload'

class App1 extends PureComponent{
    state=({
        files:[],
    })
    change(files){
        this.setState({
            files,
        })
    }
    render(){
        const {files} = this.state
        console.log(files)
        return(
            <Fragment>
                <Upload
                    files={files}
                    onChange={this.change.bind(this)}
            </Fragment>
        )
    }
}

export default App1;

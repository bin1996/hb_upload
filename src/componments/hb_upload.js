import React, { PureComponent, Fragment } from 'react';
import Icon from 'antd/lib/icon'
import './upload.css'

class Upload extends PureComponent{
    constructor(props){
        super(props)
        this.state=({
            files:this.props.files,
        })
    }

    changes(){
        const files=document.querySelector('#mine_uploads').files;
        let arr=this.state.files;
        let that=this;
        for (let file of files) {
            let reader = new FileReader();
            reader.onload = function(e) {
                arr=arr.concat(e.target.result)
                that.setState({
                    files:arr,
                })
            };
            // Read in the image file as a data URL.
            reader.readAsDataURL(file);
        }
        document.querySelector('#mine_uploads').value=''
    }
    appear(e){
        let target=e.target
        console.log(target.className)
        while(target.className!=='hb_delete'){
            target=target.parentNode
            let previews=document.getElementsByClassName('hb_preview')
            for(let i=0;i<previews.length;i++){
                if(target.parentNode===previews[i]){
                    const that=this
                    let arr=that.state.files
                    if(arr.length===1){
                        that.setState({
                            files:[],
                        })
                    }else{
                        let newArr=[];
                        for(let j=0;j<arr.length;j++){
                            if(j!==i){
                                newArr.push(arr[j])
                            }
                        }
                        that.setState({
                            files:newArr,
                        })
                    }
                }
            }
        }

    }
    componentDidUpdate(){
        const {files}=this.state
        this.props.onChange(files)
    }
    render(){
        const {files}= this.state
        return(
            <Fragment>
                <div id="con_upload" >
                    {files.length>0?files.map((v,i)=>(<div className='hb_preview' key={i}>
                        <img className='mineImgs' src={v} alt=""/>
                        <div className='hb_delete' onClick={this.appear.bind(this)}>
                            <Icon type="close" />
                        </div>
                    </div>)):''}
                    <div className='upload' >
                        <Icon type="plus" />
                        <input type="file" multiple='multiple' onChange={this.changes.bind(this)} id='mine_uploads' accept="image/gif,image/jpeg,image/jpg,image/png" />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Upload;


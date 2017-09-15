import React from 'react'

export class dummyClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            anyVariable: '',
            isFetchSuccess: false
        }
    }

    componentWillReceiveProps(newProps) {
        if(newProps.available) {
            this.setState({
                anyVariable: 'Balh blah',
                isFetchSuccess: true
            }, ()=>{
                document.getElementById('confirmForm').submit()                        
            })
        }
    }

    render(){
        return(
            <div>
                { this.state.isFetchSuccess ? (<AnyComponent id='confirmForm' bookingId={this.state.anyVariable} /> ) : null}
            </div>
        )
    }
}
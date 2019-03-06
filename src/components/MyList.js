import React from 'react';
import { connect } from 'react-redux';
import './Lists.css'

class MyList extends React.Component{
    constructor(props){
        super(props);
        this.state = {dispList:[]}
    }

    onHoverHandler(id){
        if(this.state.dispList.indexOf(id) === -1){
            let tempList = [...this.state.dispList];
            tempList.push(id);
            this.setState({dispList:tempList});
        }
    }

    render(){
        return (
            <>
                <div>MyList:</div>
                <div className='list'>
                    {this.props.mylist.map((list,index)=>{
                        let btn = null;
                        if(this.state.dispList.indexOf(list.id) > -1){
                            btn = <button onClick={() => this.props.onDel(list.id)}>Delete</button>
                        }
                        return (
                            <div className='item' key={list.id}>
                                <img 
                                    className='hoverImg' 
                                    src={list.img} 
                                    alt={list.id} 
                                    onMouseEnter={() => this.onHoverHandler(list.id)}/>
                                <div>{btn}</div>
                                <div>{list.title}</div>
                            </div>)
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        mylist: state.mylist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDel: (index) => dispatch({type: 'DEL', payload: {id: index}}),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MyList);
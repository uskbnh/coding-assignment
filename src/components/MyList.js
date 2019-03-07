import React from 'react';
import { connect } from 'react-redux';
import './Lists.css'

class MyList extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return (
            <>
                <div>MyList:</div>
                <div className='list'>
                    {this.props.mylist.map((list,index)=>{
                        return (
                            <div className='item' key={list.id}>
                                <img src={list.img} alt={list.id}/>
                                <div>
                                    <button
                                        className='btn'  
                                        onClick={() => this.props.onDel(list.id)}>
                                        Delete
                                    </button>
                                </div>
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
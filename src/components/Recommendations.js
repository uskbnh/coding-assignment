import React from 'react';
import { connect } from 'react-redux'
import './Lists.css'

class Recommendations extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <>
                <div>Recommendations:</div>
                <div className='list'>
                    {this.props.recommendations.map((rec,index)=>{
                        return (
                            <div className='item' key={rec.id}>
                                <img src={rec.img} alt={rec.id}/>
                                <div>
                                    <button
                                        className='btn'  
                                        onClick={() => this.props.onAdd(rec.id)}>
                                        Add
                                    </button>
                                </div>
                                <div>{rec.title}</div>
                            </div>)
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        recommendations: state.recommendations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (index) => dispatch({type: 'ADD', payload: {id: index}})
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Recommendations);
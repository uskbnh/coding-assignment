import React from 'react';
import { connect } from 'react-redux'
import './Lists.css'

class Recommendations extends React.Component{
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
                <div>Recommendations:</div>
                <div className='list'>
                    {this.props.recommendations.map((rec,index)=>{
                        let btn = null;
                        if(this.state.dispList.indexOf(rec.id) > -1){
                            btn = <button onClick={() => this.props.onAdd(rec.id)}>Add</button>
                        }
                        return (
                            <div className='item' key={rec.id}>
                                <img 
                                    className='hoverImg' 
                                    src={rec.img} 
                                    alt={rec.id}
                                    onMouseEnter={() => this.onHoverHandler(rec.id)}/>
                                <div>{btn}</div>
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
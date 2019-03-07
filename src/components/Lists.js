import React from 'react';
import { connect } from 'react-redux';
import './Lists.css'

class Lists extends React.Component{

    mapDataToHTML = (functionality) => {
        let dataSource = functionality === 'MyList' ? this.props.mylist : this.props.recommendations;
        return (dataSource.map((list)=>{
            let clickFunc = functionality === 'MyList' ? () => this.props.onDel(list.id) : () => this.props.onAdd(list.id);
            return (
                <div className='item' key={list.id}>
                    <img src={list.img} alt={list.id}/>
                    <div>
                        <button
                            className='btn' 
                            onClick={clickFunc}>
                            {functionality === 'MyList' ? 'Delete' : 'Add'}
                        </button>
                    </div>
                    <div>{list.title}</div>
                </div>)
        }))
    }

    render(){
        return (
            <>
                <div>{`${this.props.functionality}:`}</div>
                <div className='list'>
                    {this.mapDataToHTML(this.props.functionality)}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        mylist: state.mylist,
        recommendations: state.recommendations
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (index) => dispatch({type: 'ADD', payload: {id: index}}),
        onDel: (index) => dispatch({type: 'DEL', payload: {id: index}}),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Lists);
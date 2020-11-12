import React from 'react';

const Task = ({task}) => {
    return (
        <div className="col-md-3">
            <a href={`/register/${task.id}`}>
                <img style={{height: '300px'}} src={require(`../../../pics/images/${task.pic}`)} alt=""/>
                <h3>{task.name}</h3>
            </a>
        </div>
    );
};

export default Task;
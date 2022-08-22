import './task.css'

export function TaskCard ({ready}){

    // const cardStyles = {background: "#205020", color: "#FFF", padding:"20px"}
    return (
    <div className='card'>
        <h1>Mi primer Tarea</h1>
        <span className={ready ? 'bg-green' : 'bg-red'}>Task is done green is not, red</span>
</div>
    );
}
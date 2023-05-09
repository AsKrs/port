function Port(){

    const iframe =()=>{
        return{
            __html: '<iframe src="../inside/index.html"></iframe>'
        };
    };

    return(
        <div className="port">
           <div dangerouslySetInnerHTML={iframe()} />
        </div>
    )
}

export default Port;
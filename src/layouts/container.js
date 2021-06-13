import "./container.scss"

const Container = (props)=>{
    return(
        <div className={"container_layout"}>
            {props.children}
        </div>

    )
}

export default Container
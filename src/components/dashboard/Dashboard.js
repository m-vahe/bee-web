import Container from "../../layouts/container";
import "./Dashboard.scss"
import {Button, Empty} from "antd";
import {useAuth} from "../../context/AuthContext";
import TextEditor from "../slate/Slate";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addBlockAction, dragAndDropAction} from "../../services/redux/actions/textBlock";

const initialDnDState = {
    draggedFrom: null,
    draggedTo: null,
    isDragging: false,
    originalOrder: [],
    updatedOrder: []
}

const Dashboard = () => {
    const dispatch = useDispatch()
    const {logout} = useAuth()
    const [number,setNumber] = useState(0)
    const [dragAndDrop, setDragAndDrop] = useState(initialDnDState);
    const {textBlocks} = useSelector(state=>state.blocks)

    const handleLogOut = () => {
        logout()
    }

    const addBlocksHandler = () => {
        setNumber(number+1)
        dispatch(addBlockAction({number:number,component:<TextEditor/>}))
    }

    const onDragStart = (event) => {
        const initialPosition = Number(event.currentTarget.dataset.position);

        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: initialPosition,
            isDragging: true,
            originalOrder: textBlocks
        });

        event.dataTransfer.setData("text/html", '');
    }

    const onDragOver = (event) => {
        event.preventDefault();

        let newList = dragAndDrop.originalOrder;

        const draggedFrom = dragAndDrop.draggedFrom;

        const draggedTo = Number(event.currentTarget.dataset.position);

        const itemDragged = newList[draggedFrom];

        const remainingItems = newList.filter((item, index) => index !== draggedFrom);

        newList = [
            ...remainingItems.slice(0, draggedTo),
            itemDragged,
            ...remainingItems.slice(draggedTo)
        ];

        if (draggedTo !== dragAndDrop.draggedTo){
            setDragAndDrop({
                ...dragAndDrop,
                updatedOrder: newList,
                draggedTo: draggedTo
            })
        }
    }

    const onDrop = () => {
        dispatch(dragAndDropAction(dragAndDrop.updatedOrder))
        setDragAndDrop({
            ...dragAndDrop,
            draggedFrom: null,
            draggedTo: null,
            isDragging: false
        });
    }
    useEffect(()=>{
        console.log(textBlocks)
    },[textBlocks])
    return (
        <Container>
            <h1>Dashboard</h1>
            <div className={"dashboard_body"}>
                <Button onClick={addBlocksHandler}>Add Block</Button>
                <div className={"dashboard_body_draggable"}>
                    {textBlocks.length !== 0 ? textBlocks.map((e, i) => {
                        return (
                            <div key={i} draggable={true}
                                 data-position={i}
                                 onDragStart={onDragStart}
                                 onDragOver={onDragOver}
                                 onDrop={onDrop}
                                 className={"dashboard_body_draggable_item"}
                            >
                                <p className={"dashboard_body_draggable_item--key"}>{e.number+1}</p>
                                {e.component}
                            </div>
                        )
                    }) : <Empty/>}
                </div>
            </div>
            <Button onClick={handleLogOut} className={"log-out"}>Log Out</Button>
        </Container>
    )
}

export default Dashboard
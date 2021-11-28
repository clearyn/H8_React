import { useEffect, useState } from "react"
import { IKanbanBoard, IKanbanBoardSource } from "../type"
import { moveItem } from "../redux/actions/kanban-action";
import { useDispatch } from "react-redux";

export default function KanbanCard(props: any): JSX.Element {
    const [KanbanItems, setQueueItems] = useState<IKanbanBoardSource[]>(props.items)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setQueueItems(props.items)
    }, [props.items])

    const handleMove = ( source: number) => {
        dispatch(
            moveItem(source)
        )
    }

    return (
        <>
            <div className="col">
                <div className="card rounded shadow-lg mb-5">
                    <div className={"card-header d-flex text-white align-items-center p-3 " + props.color}>
                        <i className={"bi pe-3 " + props.icon} />
                        <div className="lh-1">
                            <h1 className="h5 mb-0 text-white lh-1">{props.title}</h1>
                        </div>
                    </div>
                    <div className="card-body">
                        {
                            KanbanItems.map((item, index) => (
                                <div key={index} className="py-3 mb-0 small lh-sm border-bottom w-100">
                                    <div className="d-flex justify-content-between">
                                        <p className="pb-3 mb-0 small lh-sm overflow-auto">
                                            <strong className="d-block text-gray-dark">{item.task}</strong>
                                        </p>
                                        {(props.buttonText) ? <button type="button" onClick={() => {handleMove(item.sourceIndex)}} className="btn btn-primary">{props.buttonText}</button> : ''}
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

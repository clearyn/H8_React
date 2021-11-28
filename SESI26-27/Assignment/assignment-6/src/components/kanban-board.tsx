import KanbanCard from "./kanban-card";
import { useDispatch, useSelector } from 'react-redux'
import { IKanbanBoard, IKanbanBoardSource } from "../type";
import { useEffect, useState } from "react";
import { addItem } from "../redux/actions/kanban-action";

export default function KanbanBoard(): JSX.Element {
    const KanbanBoards = useSelector((state: IKanbanBoard[]) => state)
    const [Input, setInput] = useState<string>('')
    const [Process, setProcess] = useState<IKanbanBoardSource[]>([])
    const [Backlog, setBacklog] = useState<IKanbanBoardSource[]>([])
    const [Evaluating, setEvaluating] = useState<IKanbanBoardSource[]>([])
    const [Done, setDone] = useState<IKanbanBoardSource[]>([])
    const dispatch = useDispatch()

    useEffect(() => {
        //todo later
        let backlog = [] as IKanbanBoardSource[]
        let process = [] as IKanbanBoardSource[]
        let evaluating = [] as IKanbanBoardSource[]
        let done = [] as IKanbanBoardSource[]

        KanbanBoards.forEach((item, sourceIndex) => {
            switch (item.board) {
                case 1:
                    backlog.push({ task: item.task, sourceIndex: sourceIndex })
                    break;
                case 2:
                    process.push({ task: item.task, sourceIndex: sourceIndex })
                    break;
                case 3:
                    evaluating.push({ task: item.task, sourceIndex: sourceIndex })
                    break;
                case 4:
                    done.push({ task: item.task, sourceIndex: sourceIndex })
                    break;
            }
        });
        setBacklog(backlog)
        setProcess(process)
        setEvaluating(evaluating)
        setDone(done)
    }, [KanbanBoards])

    const onSubmit = (event: any) => {
        event.preventDefault();
        if (Input) {
            dispatch(addItem(Input!))
        } else {
            alert("Input task dulu ya...")
        }
        setInput('')
    }

    return (
        <>
            <div>
                <div className="d-flex my-3 ">
                    <form onSubmit={onSubmit} className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Input new item here" id="newTask" value={Input} onChange={e => setInput(e.target.value)} />
                        <button className="btn btn-primary text-nowrap" type="submit">Save to Backlog</button>
                    </form>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
                <KanbanCard items={Backlog} title="Backlog" color="bg-purple" icon="bi-stack" buttonText="Take" />
                <KanbanCard items={Process} title="Process" color="bg-primary" icon="bi-lightning-charge" buttonText="Evaluate" />
                <KanbanCard items={Evaluating} title="Evaluating" color="bg-secondary" icon="bi-lightbulb" buttonText="Done" />
                <KanbanCard items={Done} title="Done" color="bg-success" icon={"bi-patch-check"} />
            </div>
        </>
    )
}

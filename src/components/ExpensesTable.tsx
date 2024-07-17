import {iTableProps, iExpense} from "../core/types"
import "./ExpensesTable.css"



export default function ExpensesTable({ expenses, cfg }: iTableProps)
{
    return <>
        <div className="expenses-table">
            <div className="expense-row header">
                <div className="expense-column">date</div>
                <div className="expense-column">merchant</div>
                <div className="expense-column">amount</div>
                <div className="expense-column">category</div>
                <div className="expense-column">description</div>
                <div className="expense-column">status</div>
            </div>
            {...expenses.map((e:iExpense) =>
            {
                return <div className="expense-row">
                    <div className="expense-column">{e.date}</div>
                    <div className="expense-column">{e.merchant}</div>
                    <div className="expense-column">{cfg.currency}{e.amount}</div>
                    <div className="expense-column">{e.category}</div>
                    <div className="expense-column">{e.description}</div>
                    <div className="expense-column">{e.status}</div>
                </div>
            })}
        </div>
    </>
}

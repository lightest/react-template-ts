import { useEffect, useState } from 'react';
import ExpensesTable from './components/ExpensesTable.tsx'
import { API } from "./core/Networking";
import { iTableProps, iExpense, iExpensesCfg } from "./core/types";

import "./App.css";

const EXPENSES_CONFIG:iExpensesCfg = {
    currency: "£"
};

const MONTH_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function processExpensesData(expensesData: Array<iExpense>): Array<iExpense>
{
    for (let i = 0; i < expensesData.length; i++)
    {
        const d = new Date(expensesData[i].date);
        const month = MONTH_SHORT[d.getMonth()];
        let date = `${d.getDate()}`;
        date = date.length === 1 ? `0${date}` : date;
        expensesData[i].date = `${month} ${date}`;
    }

    return expensesData;
}

function App()
{
    const [ expenses, setExpenses ] = useState([]);

    useEffect(() =>
    {
        async function fetchData()
        {
            const data = await API.fetchExpenses();
            console.log(data);
            const processedData = processExpensesData(data);
            setExpenses(processedData);

            return data;
        }

        fetchData();
    }, []);

    return (
        <>
            <div className="expenses-header">Expenses</div>
            <ExpensesTable expenses={expenses} cfg={EXPENSES_CONFIG} ></ExpensesTable>
        </>
    );
}

export default App;

export interface iExpense
{
    id: number
    amount: number
    merchant: string
    status: string
    description: string
    date: string
    category: string
}

export interface iExpensesCfg
{
    currency: string
}

export interface iTableProps
{
    expenses: Array<iExpense>,
    cfg: iExpensesCfg
}

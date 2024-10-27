export const Transactions = [
    {
        id: 1,
        date: '2022-01-01',
        description: 'Rent',
        amount: 1000,
        type: 'Expense',
        status: 'Paid'
    },
    {
        id: 2,
        date: '2022-01-02',
        description: 'Salary',
        amount: 5000,
        type: 'Income',
        status: 'Pending'
    },
    {
        id: 3,
        date: '2022-01-03',
        description: 'Groceries',
        amount: 150,
        type: 'Expense',
        status: 'Paid'
    },
    {
        id: 4,
        date: '2022-01-04',
        description: 'Freelance Payment',
        amount: 1200,
        type: 'Income',
        status: 'Completed'
    },
    {
        id: 5,
        date: '2022-01-05',
        description: 'Utilities',
        amount: 200,
        type: 'Expense',
        status: 'Paid'
    },
    {
        id: 6,
        date: '2022-01-06',
        description: 'Gym Membership',
        amount: 50,
        type: 'Expense',
        status: 'Pending'
    },
    {
        id: 7,
        date: '2022-01-07',
        description: 'Consultation Fee',
        amount: 300,
        type: 'Income',
        status: 'Pending'
    },
    {
        id: 8,
        date: '2022-01-08',
        description: 'Dining Out',
        amount: 75,
        type: 'Expense',
        status: 'Paid'
    },
    {
        id: 9,
        date: '2022-01-09',
        description: 'Bonus',
        amount: 700,
        type: 'Income',
        status: 'Completed'
    },
    {
        id: 10,
        date: '2022-01-10',
        description: 'Internet Bill',
        amount: 60,
        type: 'Expense',
        status: 'Paid'
    }
];



const newTransaction = Transactions.filter((transaction)=> transaction.amount >1000)
const transactionWitStatusComplete
console.log(newTransaction)
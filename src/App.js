import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Expense 1",
      price: 100,
      date: new Date(2022, 1, 10),
    },
    {
      id: 2,
      title: "Expense 2",
      price: 200,
      date: new Date(2022, 2, 10),
    },
    {
      id: 3,
      title: "Expense 3",
      price: 300,
      date: new Date(2022, 3, 10),
    },
    {
      id: 4,
      title: "Expense 4",
      price: 400,
      date: new Date(2022, 4, 10),
    },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

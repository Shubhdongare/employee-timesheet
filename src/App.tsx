import Header from "./components/Header";
import TimesheetForm from "./components/TimesheetForm";
import TimesheetTable from "./components/TimesheetTable";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <TimesheetForm />
      <TimesheetTable />
    </div>
  );
}

export default App;

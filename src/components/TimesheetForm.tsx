const TimesheetForm = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-3">
        Add Timesheet
      </h2>

      <form className="grid grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Employee Name"
          className="border p-2 rounded"
        />

        <input
          type="date"
          className="border p-2 rounded"
        />

        <input
          type="number"
          placeholder="Hours"
          className="border p-2 rounded"
        />

        <button
          className="bg-blue-600 text-white rounded p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TimesheetForm;

const TimesheetTable = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-3">
        Timesheet List
      </h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Employee</th>
            <th className="p-2">Date</th>
            <th className="p-2">Hours</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-2">John</td>
            <td className="p-2">2024-01-01</td>
            <td className="p-2">8</td>
            <td className="p-2">
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimesheetTable;

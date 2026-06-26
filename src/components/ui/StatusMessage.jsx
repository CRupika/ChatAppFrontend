const StatusMessage = ({ status }) => {
  if (!status) return null;

  const styles = {
    success: "bg-green-50 text-green-800 border border-green-200",
    error: "bg-red-50 text-red-700 border border-red-200",
  };

  return (
    <div
      role="alert"
      className={`text-sm rounded-md px-4 py-3 ${styles[status.type]}`}
    >
      {status.message}
    </div>
  );
};

export default StatusMessage;

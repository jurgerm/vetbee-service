import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Log } from "./Log";
import { LogsApi } from "../../services/logs-api";

export const LogsList = ({petId}) => {
  const [logs, setLogs] = useState();
  const { state } = useLocation();

  console.log(petId);

  const fetchLogs = async () => {
    // fetch logs from api
    const allLogs = await LogsApi.all(petId);

    // save fetched logs to local state
    setLogs(allLogs);
  };

  const addLog = (log) => {
    setLogs((prevState) => [...prevState, log]);
  };

  const deleteLog = async (id) => {
    try {
      const { deletedLogId } = await LogsApi.delete(id);
      setLogs((prevState) => prevState.filter((log) => log.id !== deletedLogId));
    } catch (e) {
      console.error(e);
    }
  };

  // fetch logs list on component load
  useEffect(() => {
    console.log('aaa');
    fetchLogs();
    console.log('zzz');
  }, []);

  // check if log obj was added, if yes, save it to the array
  useEffect(() => {
    if (!state) return;

    if (state.added) {
      addLog(state.added);
    }
  }, [state]);

  if (!logs) {
    return <span>loading...</span>;
  }

  console.log(logs);

  return logs.map((log) => (
    <Log
      key={log.id}
      logId={log.id}
      log={log}
      onDelete={() => {
        deleteLog(log.id);
      }}
    />
  ));
};

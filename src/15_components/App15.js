// import React from 'react';
// import ForwardCounter from './ForwardCounter';
// import BackwardCounter from './BackwardCounter';

// const App15 = () => {
//   return (
//     <React.Fragment>
//         <ForwardCounter />
//         <BackwardCounter />
//     </React.Fragment>
//   );
// };

// export default App15;



import React, { useCallback, useEffect, useState } from 'react';
import Tasks from './Tasks/Tasks';
import NewTask from './NewTask/NewTask';
import useHttp from './hooks/use-http';

function App15() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: `https://udemy-react-15-ms-tasks-default-rtdb.firebaseio.com/tasks.json` },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App15;

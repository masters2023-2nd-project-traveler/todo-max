import { createContext, useContext, useState, ReactNode } from 'react';

type DataType = {
  todoListData: any;
  setTodoListData: (value: any) => void;
};

const DataContext = createContext<DataType>({
  todoListData: null,
  setTodoListData: () => {},
});

type DataProviderProps = {
  children: ReactNode;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [todoListData, setTodoListData] = useState(null);

  return (
    <DataContext.Provider value={{ todoListData, setTodoListData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

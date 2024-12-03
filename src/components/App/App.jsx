import { Routes, Route } from 'react-router';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
        </Route>
      </Routes>
    </>
  );
}

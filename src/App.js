import './App.css';
import { Space } from "antd";
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import PageContent from './Components/PageContent';
import Sidebar from './Components/Sidemenu/Sidebar';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Space>
        <Sidebar></Sidebar>
        <PageContent></PageContent>
      </Space>
      <AppFooter/>
    </div>
  );
}

export default App;

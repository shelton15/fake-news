import './App.css';
import Grid from '@mui/material/Grid';
import AppFooter from './Components/AppFooter';
import AppHeader from './Components/AppHeader';
import PageContent from './Components/PageContent';
import Sidebar from './Components/Sidemenu/Sidebar';

function App() {
  return (
    <div className="App">
      <AppHeader/>
        <Grid>
          <Sidebar></Sidebar>
          <PageContent></PageContent>
        </Grid>
      <AppFooter/>
    </div>
  );
}

export default App;

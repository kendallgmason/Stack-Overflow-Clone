import Header from './Header';
import { Reset } from 'styled-reset';
import {createGlobalStyle} from 'styled-components';
import QuestionsPage from './QuestionsPage';

const GlobalStyles= createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');
body {
  background: #2d2d2d;
  color: #ffffff;
  font-family: Poppins, san-serif;
}
`;

function App() {
  return (
    <div>
    <Reset />
    <GlobalStyles />
    <Header />
    <QuestionsPage />
    </div>
  );
}

export default App;

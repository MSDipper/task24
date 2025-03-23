import './styles/styles.scss';
import styles from './App.module.scss';
import { ProjectsMenuList } from '../entities/Posts/Projects';
import { Filter } from '../entities/Filter';

function App() {

  return (
    <div className={styles.component}>
      <div className={styles.sidebar}></div>
      <div className={styles.main}>
        <Filter/>
        <ProjectsMenuList className={styles.projectsGrid} />
      </div>
    </div>
  );
}

export default App;

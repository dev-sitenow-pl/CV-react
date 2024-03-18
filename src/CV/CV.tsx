import { Header } from '../Header/Header';
import { Person } from '../Person/Person';
import { Experience } from '../Experience/Experience';
import { Footer } from '../Footer/Footer';

import './CV.scss'

const CV = () => {
  return <main>
    <Header />
    <div className="content">
      <Person />
      <Experience />
    </div>
    <Footer />
  </main>
}

export { CV };
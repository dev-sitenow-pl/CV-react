import { Header } from '../Header';
import { Person } from '../Person';
import { Experience } from '../Experience';
import { Footer } from '../Footer';

import './CV.scss'

import { CVData } from '../types';

const CV = () => {
  const CvData: CVData = {
    personal: {
      photo: 'https://sitenow.pl/images/sebastian.jpg',
      name: 'Sebastian',
      lastName: 'Nowak',
      position: 'Front-end Developer',
    },
    details: {
      experience: [{
        description: 'Adimo', year: 2008
      },
      {
        description: 'Netivo', year: 2009
      },
      {
        description: 'Agencja 4all', year: 2016
      }],
      education: ['Mega K', 'Mega K Frontowcy'],
    }
  }
  return <main>
    <Header />
    <div className="content">
      <Person data={CvData.personal} />
      <Experience data={CvData.details} />
    </div>
    <Footer />
  </main>
}

export { CV };
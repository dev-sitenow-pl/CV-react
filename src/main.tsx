import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/main.scss'

interface Experience {
  description: string;
  year: number;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const CvData: CVData = {
  photo: 'https://sitenow.pl/images/sebastian.jpg',
  name: 'Sebastian',
  lastName: 'Nowak',
  position: 'Front-end Developer',
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

const imgTag = (url: string, alt: string) => {
  return <img src={url} alt={alt} />
}

const experienceLi = CvData.experience
  .map(experience => (
    <li key={experience.year}>
      Rok: {experience.year} - {experience.description}
    </li>
  ));


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <header className="box">
        <h1>Curriculum vitae</h1>
      </header>

      <div className="content">
        <div className="box box__left">
          <div className="box__person-img">
            {imgTag(CvData.photo, `${CvData.name} ${CvData.position} `)}
            <div className="box__person-img__description">
              <h2>{CvData.name} {CvData.lastName}</h2>
              <h3>{CvData.position}</h3>
            </div>

          </div>

        </div>
        <div className="box box__right">
          <div className="box__experience">
            <h3>Doświadczenie zawodowe:</h3>
            <ul>
              {experienceLi}
            </ul>
          </div>
          <div className="box__experience">
            <h3>Edukacja:</h3>
            <ul>
              {CvData.education.map((education, index) =>
                <li key={index}>{education},</li>
              )}
            </ul>
          </div>


        </div>
      </div>
      <footer className="box">
        <h2>Więcej na <a href="http://sitenow.pl" target="_blank" rel="noopener noreferrer">sitenow.pl</a></h2>
      </footer>




    </main>

  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'

interface Experience {
  description: string;
  year: number;
}

interface CVData {
  photo: string;
  name: string;
  position: string;
  experience: Experience[];
  education: string[];
}

const CvData: CVData = {
  photo: 'https://sitenow.pl/images/sebastian.jpg',
  name: 'Sebastian',
  position: 'Front-end Developer',
  experience: [{
    description: 'Adimo', year: 2008
  },
  {
    description: 'Agencja 4all', year: 2016
  }],
  education: ['coś tam', 'coś tam 2'],
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
    <>
      {imgTag(CvData.photo, `${CvData.name} ${CvData.position} `)}
      {CvData.position}

      <ul>
        {experienceLi}
      </ul>
      <ul>
        {CvData.education.map((education, index) =>
          <li key={index}>{education};</li>
        )}
      </ul>
    </>

  </React.StrictMode>,
)

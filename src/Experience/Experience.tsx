interface Experience {
  description: string;
  year: number;
}

interface CVData {
  experience: Experience[];
  education: string[];
}

const CvData: CVData = {
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

const experienceLi = CvData.experience
  .map(experience => (
    <li key={experience.year}>
      Rok: {experience.year} - {experience.description}
    </li>
  ));

const Experience = () => {
  return <div className="box box__right">
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
}

export { Experience };
import { CVDetails } from '../types';

type Props = {
  data: CVDetails
}

const Experience = ({ data: { experience, education } }: Props) => {
  const experienceLi = experience
    .map(experience => (
      <li key={experience.year}>
        Rok: {experience.year} - {experience.description}
      </li>
    ));

  const educationLi = education
    .map((education, index) =>
      <li key={index}>{education},</li>
    )
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
        {educationLi}
      </ul>
    </div>
  </div>
}

export { Experience };
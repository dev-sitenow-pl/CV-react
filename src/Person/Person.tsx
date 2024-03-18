interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
}

const CvData: CVData = {
  photo: 'https://sitenow.pl/images/sebastian.jpg',
  name: 'Sebastian',
  lastName: 'Nowak',
  position: 'Front-end Developer',
}

const imgTag = (url: string, alt: string) => {
  return <img src={url} alt={alt} />
}

const Person = () => {
  return <div className="box box__left">
    <div className="box__person-img">
      {imgTag(CvData.photo, `${CvData.name} ${CvData.position} `)}
      <div className="box__person-img__description">
        <h2>{CvData.name} {CvData.lastName}</h2>
        <h3>{CvData.position}</h3>
      </div>
    </div>
  </div>
}

export { Person };
import { CVPresonal } from '../types';

type Props = {
  data: CVPresonal
}

const imgTag = (url: string, alt: string) => {
  return <img src={url} alt={alt} />
}

const Person = ({ data: { photo, name, lastName, position } }: Props) => {
  return <div className="box box__left">
    <div className="box__person-img">
      {imgTag(photo, `${name} ${position} `)}
      <div className="box__person-img__description">
        <h2>{name} {lastName}</h2>
        <h3>{position}</h3>
      </div>
    </div>
  </div>
}

export { Person };
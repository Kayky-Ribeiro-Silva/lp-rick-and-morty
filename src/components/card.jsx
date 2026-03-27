import s from './card.module.css'

export const Card = ({ name, image, species, status, gender }) => {
  return (
    <div className={s.card}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
    </div>
  )
} 
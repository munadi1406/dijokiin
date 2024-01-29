import Img from "next/image"
const Image = ({id,alt,...props}) => {
  return (
    <Img src={`/assets/img/${id}`} alt={`dijokkin ${alt}`} width="500" height="300" placeholder="blur" {...props} priority/>
  )
}

export default Image
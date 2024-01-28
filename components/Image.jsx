import Img from "next/image"
const Image = ({id,alt,...props}) => {
  return (
    <Img src={`/assets/img/${id}`} alt={alt} width="500" height="300" placeholder="blur" {...props}/>
  )
}

export default Image
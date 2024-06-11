import ImageComponent from "./ImageComponent"


const AvatarComponent = ({username, image}) => {
  return (
    <div className="w-full flex flex-col iustify-center items-center ">
        <ImageComponent avatar={image}/>
        <h1 className="text-3xl text-center font-bold">{username}</h1>
      
    </div>
  )
}

export default AvatarComponent

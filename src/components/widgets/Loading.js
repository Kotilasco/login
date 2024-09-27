import '../../css/loading.css'

const Loading = ({message}) => { 
  const gif_src = "images/loading_gif.gif"

  return (
    <div className="loading"> 
      <div className="loading__modal"> 
        <h3>{message}</h3>
        <img src={gif_src} alt="Form is being submitted" />
      </div> 
    </div>
  )
}

export default Loading
function NewsCard(props){
return(
    <>
    <div className="m-10 max-w-md md:max-w-3xl rounded-2xl overflow-hidden shadow-lg">
  <img className="w-full" src={props.photo_url} alt=""/>
  <div className="px-6 py-4">
    <p className="text-gray-700 text-md md:text-lg">
      "{props.text}"
    </p>
  </div>
  <div className="px-6 pt-4 pb-2 font-thin text-md md:text-lg">
  — {props.author}, <a href={props.article_url} className="text-red-400">{props.article_text}</a>
  </div>
</div>
    
    </>

)

}

export default NewsCard;
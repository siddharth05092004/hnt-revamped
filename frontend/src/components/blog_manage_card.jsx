import { useEffect } from "react";

function ManageBlogCard(props){

    async function deleteCard(){
        let password = prompt("Please enter the password");
        if(password != null && password != ""){
            await fetch(import.meta.env.VITE_API_URI + "blog/"+props.data._id,{method:"DELETE",
            headers : {'Content-Type': 'application/json'},
            body:JSON.stringify({pass:password})
        }).then((response)=>{
            if(response.status == 200){
                location.reload();
                alert("Card Deleted!")
            }
            else if(response.status == 501){
                alert("Wrong Password!")
            }
            else if(response.status == 500){
                alert("Wrong Entries!")
            }
          })
        }
    }

    return(
    
    
    
    <>
        
            <div className="max-w-lg bg-gray-800 p-5 border rounded-2xl ">
                <p className="text-gray-200"><span className="text-red-400">id:</span> {props.data._id}</p>
                <p className="text-gray-200"><span className="text-red-400">photo_url: </span>{props.data.photo_url}</p>
                <p className="text-gray-200"><span className="text-red-400">title: </span>{props.data.title}</p>
                <p className="text-gray-200"><span className="text-red-400">author: </span>{props.data.author}</p>
                <p className="text-gray-200"><span className="text-red-400">dateTime: </span>{props.data.dateTime}</p>
                <p className="text-gray-200"><span className="text-red-400">articleLink: </span>{props.data.articleLink}</p>
                <p className="text-gray-200"><span className="text-red-400">description: </span>{props.data.description}</p>
                <p className="text-gray-200"><span className="text-red-400">order: </span>{props.data.order}</p>

                <button className="py-2" onClick={deleteCard}><img src = "../../assets/icons/trash.svg" className="invert w-7 hover:invert-75"/></button>
            </div>

    </>)
}

export default ManageBlogCard;









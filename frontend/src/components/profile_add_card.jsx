function AddProfileCard(props){

    async function addData(){
        let password = prompt("Please enter the password");
        if(password != null && password != ""){
            const photo_url_text = document.getElementById("photo_url").value;
            const profile_post_text = document.getElementById("profile_post").value;
            const insta_id_text = document.getElementById("insta_id").value;
            const profile_name_text = document.getElementById("profile_name").value;
            const order_text = document.getElementById("order").value;

            
            await fetch(import.meta.env.VITE_API_URI + props.parent_component,{method:"POST",
            
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({photo_url:photo_url_text,profile_name:profile_name_text,profile_post:profile_post_text,insta_id:insta_id_text,order:order_text,pass:password})})
            .then((response)=>{
                if(response.status == 200){
                    location.reload();
                    alert("Card Added!")
                }
                else if(response.status == 501){
                    alert("Wrong Password!")
                }
                else if(response.status == 500){
                    alert("Wrong Entries!")
                }})
        }
    }

    return(
        <>
            <div className="max-w-lg bg-gray-700 p-5 border rounded-2xl ">
                <p className="mt-2 text-gray-200"><span className="text-gray-200">photo_url: <input type="text" name="photo_url" id="photo_url" className="text-gray-900 border rounded-md"/></span>{}</p>
                <p className="text-gray-200 mt-2"><span className="text-gray-200">profile_post: <input type="text" name="profile_post" id="profile_post" className="text-gray-900 border rounded-md"/></span>{}</p>
                <p className="text-gray-200 mt-2"><span className="text-gray-200">insta_id: <input type="text" name="insta_id" id="insta_id" className="text-gray-900 border rounded-md"/></span>{}</p>
                <p className="text-gray-200 mt-2"><span className="text-gray-200">profile_name: <input type="text" name="profile_name" id="profile_name" className="text-gray-900 border rounded-md"/></span>{}</p>
                <p className="text-gray-200 mt-2"><span className="text-gray-200">order: <input type="text" name="order" id="order" className="text-gray-900 border rounded-md"/></span>{}</p>

                <button className="py-2" onClick={addData}><img src = "../../assets/icons/plus.svg" className="invert w-7 hover:invert-75"/></button>
            </div>
        </>
    )
}

export default AddProfileCard;
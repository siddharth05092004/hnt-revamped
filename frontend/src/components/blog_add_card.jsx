function AddBlogCard(props){

    async function addData(){
        let password = prompt("Please enter the password");
        if(password != null && password != ""){
            const photo_url_text = document.getElementById("photo_url").value;
            const author_text = document.getElementById("author").value;
            const title_text = document.getElementById("title").value;
            const dateTime_text = document.getElementById("dateTime").value;
            const articleLink_text = document.getElementById("articleLink").value;
            const description_text = document.getElementById("description").value;
            const order_text = document.getElementById("order").value;
            
            await fetch(import.meta.env.VITE_API_URI +"blog",{method:"POST",
            
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({photo_url:photo_url_text,author:author_text,title:title_text,dateTime:dateTime_text,articleLink:articleLink_text,description:description_text,order:order_text,pass:password})})
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
                <p className="mt-2 text-gray-200"><span className="text-red-400">photo_url: <input type="text" name="photo_url" id="photo_url" className="text-gray-900 border rounded-md"/></span></p>
                <p className="mt-2 text-gray-200"><span className="text-red-400">title: <input type="text" name="title" id="title" className="text-gray-900 border rounded-md"/></span></p>
                <p className="mt-2 text-gray-200"><span className="text-red-400">author: <input type="text" name="author" id="author" className="text-gray-900 border rounded-md"/></span></p>
                <p className="mt-2 text-gray-200"><span className="text-red-400">dateTime: <input type="text" name="dateTime" id="dateTime" className="text-gray-900 border rounded-md"/></span></p>
                <p className="mt-2 text-gray-200"><span className="text-red-400">articleLink: <input type="text" name="articleLink" id="articleLink" className="text-gray-900 border rounded-md"/></span></p>
                <p className="mt-2 text-gray-200"><span className="text-red-400">description: <input type="text" name="description" id="description" className="text-gray-900 border rounded-md"/></span></p>
                <p className="mt-2 text-gray-200"><span className="text-red-400">order: <input type="text" name="order" id="order" className="text-gray-900 border rounded-md"/></span></p>

                <button className="py-2" onClick={addData}><img src = "../../assets/icons/plus.svg" className="invert w-7 hover:invert-75"/></button>
            </div>
        </>
    )
}

export default AddBlogCard;
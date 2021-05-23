import React, { useContext, useState } from 'react'
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import './style.css';
import firebase from 'firebase/app';
import { db, storage } from '../../firebase';
import makeid from '../../helper/RandomId';

export default function CreatePost() {
    const [user, setUser] = useContext(UserContext);
    const [caption, setCaption] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);


    const handleChange = (e) => {
        if (e.target.files[0]) //if user has selected multiple files, we want 1st one only.
        {
            setImage(e.target.files[0]);
            var selectedImageSrc = URL.createObjectURL(e.target.files[0]); // gets the url of selected file. 

            var imagePreview = document.getElementById("image-preview")

            imagePreview.src = selectedImageSrc;
            imagePreview.style.display = "block";
        }
    }
    const handleUpload = () => {
        if (image) {
            var imageName = makeid(10); //psuedo image name , just to avoid conflicts 
            const uploadTask = storage.ref(`images/${imageName}.jpg`)       //this is the place where we want to store the image
                .put(image);

            // to check the status 
            uploadTask.on("state_changed",
                (snapshot) => {
                    // progress function 1% , 5% uploaded...

                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                    setProgress(progress);
                }, (error) => console.log(error),
                () => {
                    //get download url and upload info
                    storage.ref("images").child(`${imageName}.jpg`).getDownloadURL().then(
                        (imageUrl) => {
                            db.collection('posts').add({
                                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                                caption: caption,
                                imageURL: imageUrl,
                                name: user.displayName,
                                profilePic: user.photoURL,
                                email: user.email,
                            })
                            // db.collection('main').doc(user.uid).collection('posts').add({
                            //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            //     caption: caption,
                            //     imageURL: imageUrl,
                            //     name: user.displayName,
                            //     profilePic: user.photoURL,
                                
                            // })

                            // db.collection('main').doc(user.uid).set({
                            //     name: user.displayName,
                            //     profilePic: user.photoURL,
                            //     email: user.email,

                            // })

                        }
                    )
                    // once the image & caption is upload the field should become blank :
                    setProgress(0);
                    setCaption("");
                    setImage(null);
                    document.getElementById("image-preview").style.display="none";
                })

        }
    }

    return (
        <div className="createPost">
            {   user ?
                <div className="createPost_loggedIn">
                    <p>Create Post</p>
                    <div className="createPost_loggedInCenter">
                        <textarea className="createPost_textarea" rows="3" value={caption}
                            onChange={(e) => { setCaption(e.target.value) }}
                            placeholder="Enter caption here"
                        >
                        </textarea>
                        <div className="createPost_imagePreview">
                            <img id="image-preview" alt="" />
                        </div>
                    </div>
                    <div className="createPost_loggedInBottom">
                        <div className="createPost_ImageUpload">
                            <label htmlFor="fileinput">
                                <AddAPhotoIcon style={{ cursor: "pointer", fontSize: "20px" }} />
                            </label>
                            <input id="fileinput" type="file" accept="image/*" onChange={handleChange} />
                        </div>
                        <button className="createPost_uploadBtn" onClick={handleUpload} style={{ color: caption ? "#000" : "lightgrey" }}>{`upload ${progress !== 0 ? progress : ""}`}</button>
                    </div>
                </div>
                : <>
                    <SignInBtn />
                    <p style={{ paddingLeft: '10px' }}> to post and Create </p>
                </>
            }
        </div>
    )
}

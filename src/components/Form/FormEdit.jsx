import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button"
import {useEffect, useState} from "react"
import { storage } from "../../config/firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import { gql, useMutation } from "@apollo/client"
import { GetBook } from "../Books/Books"
import { useLocation, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

export const UPDATE_BOOK = gql`
  mutation update_book($id: String!, $tittle: String!, $image: String!) {
    update_book_by_pk(
        pk_columns: {id: $id},
        _set: {tittle: $tittle, image: $image}
    ) {
        id
        tittle
        image
    }
  }
`

const FormEdit = () => {
    const[update_book] = useMutation(UPDATE_BOOK, {
        refetchQueries: [GetBook]
    })
    
    const navigate = useNavigate()
    const edit = useLocation()
    // console.log (edit)

    const regexNotEmpty = /\S+/
    const [errMsg, setErrMsg] = useState("")
    const [percent, setPercent] = useState(0);
    const [inputData, setInputData] = useState({
        tittle: edit.state.item.tittle,
        writter: edit.state.item.writter,
        publication_year: edit.state.item.publication_year,
        image: "",
        stock: edit.state.item.stock,
        description: edit.state.item.description
    })
    
    function changehandle(e){
        if (e.target.name === "image"){
            setInputData({
                ...inputData,[e.target.name]:e.target.files[0]
            })
        } else {
            setInputData({
                ...inputData,[e.target.name]:e.target.value
            })
        }
    }

    function submit(e){
        if (
          !regexNotEmpty.test(inputData.tittle) || 
          !regexNotEmpty.test(inputData.writter) || 
          !regexNotEmpty.test(inputData.publication_year) || 
          !regexNotEmpty.test(inputData.image) ||
          !regexNotEmpty.test(inputData.stock) || 
          !regexNotEmpty.test(inputData.description)) {
          setErrMsg("Please enter data")
        } else {
            handleUpload()
            setErrMsg("")
            // alert ("Data Berhasil di Update!")
        }
        console.log(inputData)
      e.preventDefault()
    }

    const handleUpload = () => {
        // handle file ref 
        const storageRef = ref(storage, `/files/${inputData.image.name}`)
    
        const uploadTask = uploadBytesResumable(storageRef, inputData.image)
    
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const percent = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
    
            setPercent(percent)
              console.log('Progress >>> ${percent}%');
          },
    
          (err) => {
            console.log('error upload file ', err);
          },
    
          () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then((url) => {
              console.log('url download file', url);

              update_book({
                variables: {
                    id: edit.state.item.id,
                    tittle: inputData.tittle,
                    image: url
                }
              })
            })
            alert ("Data Berhasil di Update!")
            navigate("/books")
          }
        )
      }

    return(
        <>
            <div>
                <br/>
                <h1>Edit Book</h1><br/>
                <form>
                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Title"
                            type="text"
                            classInput="form-control"
                            name="tittle"
                            value={inputData.tittle}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Author"
                            type="text"
                            classInput="form-control"
                            name="writter"
                            value={inputData.writter}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Publication Year"
                            type="text"
                            classInput="form-control"
                            name="publication_year"
                            value={inputData.publication_year}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    
                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Image"
                            type="file"
                            classInput="form-control text-primary border-primary"
                            id="img"
                            name="image"
                            // value={inputData.image}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Stock"
                            type="number"
                            classInput="form-control"
                            name="stock"
                            value={inputData.stock}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    <div className="col-md-9">
                        <label htmlFor="description" className="form-label">
                            Description
                        </label>
                        <textarea
                            className="form-control"
                            id="description"
                            name="description"
                            rows={5}
                            value={inputData.description}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>
                    
                    <br/>

                    <div className="row col-md-9">
                        <Button
                            label={'Update'}
                            onClick={submit }
                        />
                    </div><br/><br/>
                </form>
            </div>
        </>
    )
}

export default FormEdit
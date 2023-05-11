import Input from "../../elements/Input/Input";
import Button from "../../elements/Button/Button";
import {useState} from "react"
import { gql, useMutation } from "@apollo/client";
import { GetMember } from "../Members/Members";


export const ADD_MEMBER = gql`
    mutation member($object: member_insert_input!) {
        insert_member_one(object: $object){
            id
            name
            nim
            phone_number
            email
            departement
        }
    }
`
const FormMember = () => {
    const[insertmember] = useMutation(ADD_MEMBER, {
        refetchQueries: [GetMember]
    })
    const regexNotEmpty = /\S+/
    const [errMsg, setErrMsg] = useState("")
    const [inputData, setInputData] = useState({
        name:"",
        nim:"",
        phone_number:"",
        email:"",
        departement:""
    })

    function changehandle(e){
        setInputData({
        ...inputData,[e.target.name]:e.target.value
        })
    }

    function submit(e){
        if (
            !regexNotEmpty.test(inputData.name) || 
            !regexNotEmpty.test(inputData.nim) || 
            !regexNotEmpty.test(inputData.phone_number) || 
            !regexNotEmpty.test(inputData.email) || 
            !regexNotEmpty.test(inputData.departement)) {
            setErrMsg("Please enter data")
        } else {
            handleUpload()
            setErrMsg("")
            alert ("Data Tersimpan!")
        }
        console.log(inputData)
        e.preventDefault()
    }

    const handleUpload = () => {
        insertmember({
            variables: {
                object: {
                    id: 12,
                    name: inputData.name,
                    nim: inputData.nim,
                    phone_number: inputData.phone_number,
                    email: inputData.email,
                    departement: inputData.departement
                }
            }
        })
    }
    return(
        <>
            <div>
                <br/>
                <h1>Add Member</h1><br/>
                <form>
                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Name"
                            type="text"
                            classInput="form-control"
                            name="name"
                            value={inputData.name}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="NIM"
                            type="text"
                            classInput="form-control"
                            name="nim"
                            value={inputData.nim}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Phone Number"
                            type="text"
                            classInput="form-control"
                            name="phone_number"
                            value={inputData.phone_number}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Email"
                            type="email"
                            classInput="form-control"
                            name="email"
                            value={inputData.email}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>

                    <div className="col-md-9">
                        <Input 
                            classLabel="form-label"
                            label="Departement"
                            type="text"
                            classInput="form-control"
                            name="departement"
                            value={inputData.departement}
                            onChange={changehandle}
                        />
                        <span style={{color:"red"}}>{errMsg}</span>
                    </div>
                    
                    <br/>

                    <div className="row col-md-9">
                        <Button
                            label={'Submit'}
                            onClick={submit}
                        />
                    </div><br/><br/>
                </form>
            </div>
        </>
    )
}

export default FormMember
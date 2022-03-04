import axios from "axios";
import React, { useEffect, useState } from "react";
import { ProjectPreview } from "../projectpreview/ProjectPreview";

interface Props {
    
}

export const Home: React.FC<Props> = () => {
    const [userData, setUserData] = useState([])
    const serverURL = 'http://coms-402-sd-22.class.las.iastate.edu:8080'

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                console.log(res.data.data)
                setUserData(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const projects = userData.map((data:any, id:any) => {
        return <ProjectPreview key={id} />
    });

    return (
        <div className='Home'>
            {projects}
            {/* <ProjectPreview /> */}
        </div>
    );
}
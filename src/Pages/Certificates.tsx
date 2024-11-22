import * as React from "react";
import Box from "@mui/material/Box";
import {certificates} from "../Data/Certificates";

const Certificates = () => {
    return (
        <Box sx={{flexGrow: 1, px: 3}}>
            {certificates.map((certificate, index) => {
                return ( <div key={certificate.name}>
                    <p>name: {certificate.name}</p>
                    <p>type: {certificate.type}</p>
                    <p>description: {certificate.description}</p>
                    <a target="_blank" href={certificate.url}  rel="noreferrer"> Certificate url</a>
                    {index !== certificates.length -1 && <hr/> }
                </div>)
            })}
        </Box>
    )
}

export default Certificates;
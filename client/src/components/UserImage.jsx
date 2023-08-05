import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px"}) => { //profile image you see from user
    return (
        <Box width={size} height={size}>
            <img 
                style={{ objectFit: "cover", borderRadius: "50%"}}
                width={size}
                height={size}
                alt="user"
                src={`http://localhost:3000/assets/${image}`} //might be 3000 not 3001
            />
        </Box>
    );
};

export default UserImage;
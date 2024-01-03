import AppBar from '@mui/material/AppBar';
import { Button } from '@mui/material';
import {Typography} from '@mui/material';

function Appbar(){
return(
    <div style={{backgroundColor : "#785875" , display : 'flex',
                        justifyContent:'space-between'}}>
        <AppBar style={{padding : 20 ,
                        backgroundColor : "teal" 
                        }}>
        <div style={{display : 'flex' }}>
        <Typography variant="h4" style={{justifyContent : 'flex-start'}}> eLearning </Typography>
        
            <div style={{display:'flex'}}>
        <Button variant="contained" style={{justifyContent: 'flex-end'}}>LogIn</Button>
        <Button variant="contained" style={{justifyContent: 'flex-end'}}>SignUp</Button>
        </div>
        </div>
        </AppBar>
    </div>
)
}

export default Appbar;
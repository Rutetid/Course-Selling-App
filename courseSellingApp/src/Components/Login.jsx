import { Card } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function Login() {
	return (
		<div style={{ paddingTop: 150, paddingBottom: 269 }}>
			<center>
				<Typography variant="h5">Welcome Back , Login below</Typography>
				<br />
				<Card variant="outlined" style={{ width: 400, padding: 10 }}>
					<TextField
						id="outlined-basic"
						label="Email"
						variant="outlined"
						fullWidth={true}
					/>
					<br /> <br />
					<TextField
						id="outlined-basic"
						label="password"
						variant="outlined"
						fullWidth={true}
					/>
					<br /> <br />
					<Button variant="contained" style={{ width: 100, height: 45 }}>
						Login
					</Button>
				</Card>
			</center>
		</div>
	);
}

export default Login;

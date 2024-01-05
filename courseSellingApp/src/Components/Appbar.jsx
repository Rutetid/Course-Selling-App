import { Button } from "@mui/material";
import { Typography } from "@mui/material";

function Appbar() {
	return (
		<div
			style={{
				padding: 10,
				backgroundColor: "teal",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div>
				<Typography variant="h4" style={{ color: "white" }}>
					eLearning{" "}
				</Typography>
			</div>

			<div>
				<Button variant="contained" style={{ marginRight: 10 }}>
					LogIn
				</Button>
				<Button variant="contained" style={{ marginRight: 10 }}>
					SignUp
				</Button>
			</div>
		</div>
	);
}

export default Appbar;

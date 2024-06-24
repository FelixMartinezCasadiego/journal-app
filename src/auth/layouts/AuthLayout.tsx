import { Grid, Typography } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
  title: string;
}
export const AuthLayout = ({ children, title }: Props) => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"100vh"}
      bgcolor={"primary.main"}
      padding={4}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
          width: { md: 450 },
        }}
      >
        <Typography variant="h5" mb={1}>
          {title}
        </Typography>

        {children}
      </Grid>
    </Grid>
  );
};

import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";

import { AuthLayout } from "../layouts/AuthLayout";

export const Register = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} mt={2}>
            <TextField
              label={"Full name"}
              type="test"
              placeholder="Full name"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField
              label={"email"}
              type="email"
              placeholder="email@google.com"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} mt={2}>
            <TextField
              label={"password"}
              type="password"
              placeholder="password"
              fullWidth
              autoComplete="new-password"
            />
          </Grid>

          <Grid container spacing={2} mb={2} mt={1}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"} mt={1}>
            <Typography mr={1}>Do you have an account?</Typography>
            <Link component={RouterLink} color={"inherit"} to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

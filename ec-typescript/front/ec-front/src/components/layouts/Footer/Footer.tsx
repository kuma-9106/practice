import Link from "@mui/material/Link";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <Typography align="center">
          <Link
            href="http://localhost:3000/"
            target="_blank"
            underline="none"
            color="inherit"
            variant="caption"
          >
            トップス一覧
          </Link>
          ｜
          <Link
            href="http://localhost:3000/"
            target="_blank"
            underline="none"
            color="inherit"
            variant="caption"
          >
            インナー一覧
          </Link>
          ｜
          <Link
            href="http://localhost:3000/"
            target="_blank"
            underline="none"
            color="inherit"
            variant="caption"
          >
            パンツ一覧
          </Link>
          ｜
          <Link
            href="http://localhost:3000/"
            target="_blank"
            underline="none"
            color="inherit"
            variant="caption"
          >
            靴一覧
          </Link>
          ｜
          <Link
            href="http://localhost:3000/"
            target="_blank"
            underline="none"
            color="inherit"
            variant="caption"
          >
            アクセサリー一覧
          </Link>
        </Typography>
      </footer>
    </>
  );
};
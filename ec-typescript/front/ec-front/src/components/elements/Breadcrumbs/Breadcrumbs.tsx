import React from "react";
import { Breadcrumbs, Typography, Link, Stack } from "@mui/material";
import { BreadcrumbArray } from "../../../types/breadcrumbs";

export const CommonBreadcrumbs = ({ links }: BreadcrumbArray) => {
  const breadcrumbs = links.map(({ text, href }, index) => {
    if (index === links.length - 1) {
      return (
        <Typography key={index} color="text.primary">
          {text}
        </Typography>
      );
    } else {
      return (
        <Link underline="hover" key={index} color="inherit" href={href}>
          {text}
        </Link>
      );
    }
  });

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};



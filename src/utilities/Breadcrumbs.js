import React from "react";
import {
    Breadcrumbs as MUIBreadcrumbs,
    Link,
    Typography
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

const Breadcrumbs = (props) => {
    const {
        history,
        location: { pathname }
    } = props;
    const pathnames = pathname.split("/").filter((x) => x);
    return (
        <MUIBreadcrumbs separator=">" aria-label="breadcrumb" style={{ marginLeft: '132px', }}>
            {pathnames.length > 0 ? (
                <Link onClick={() => history.push("/")}>AllCards</Link>
            ) : (
                <Typography> AllCards > Select a Card </Typography>
            )}
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <Typography key={name}>{name}</Typography>
                ) : (
                    <Link key={name} onClick={() => history.push(routeTo)}>
                        {name}
                    </Link>
                );
            })}
        </MUIBreadcrumbs>
    );
};

export default withRouter(Breadcrumbs);

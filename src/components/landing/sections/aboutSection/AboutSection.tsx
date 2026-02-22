import React from "react";
import classes from "./AboutSection.module.css";
import { Button, Typography } from "@/components/ui";
import { Card } from "@/components/ui/card/Card";
function AboutSection() {
  return (
    <div className={classes.aboutBanner}>
      <Card className={classes.textBanner}>
        <Typography size={36} as="h2" className={classes.textH2}>
          Designed and built by an astonishing creative team.
        </Typography>
        <Typography size={18} as="p" className={classes.textP}>
          Et eleifend consectetur tellus consectetur nibh non urna lobortis.
          Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et
          leo. Varius praesent tinc.
        </Typography>
        <Button label={"About Us"} className={classes.aboutButton}></Button>
      </Card>
    </div>
  );
}

export default AboutSection;

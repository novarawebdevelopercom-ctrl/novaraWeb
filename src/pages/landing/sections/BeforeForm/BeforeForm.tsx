import { beforeForm } from "@/components/shared/config/constants";
import { Container, Typography } from "@/components/ui";
import Image from "next/image";
import React from "react";
import classes from "./BeforeForm.module.css";
function BeforeForm() {
  return (
    <div>
      <div className="container">
        <Container className={classes.cardContainer}>
          {beforeForm.map((item) => (
            <div key={item.id} className={classes.cardItem}>
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={382}
                  height={286}
                  className={classes.cardImg}
                />
              )}

              <div className={classes.cardTitle}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                />
                <Typography as="h3" size={21}>
                  {item.title}
                </Typography>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
}

export default BeforeForm;

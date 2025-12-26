import { Container, Typography } from "@/components/ui";
import classes from "./process.module.css";
import { Card } from "@/components/ui/card/Card";
import { ProcessLink } from "@/components/shared/config/constants";
import Image from "next/image";
function Process() {
  return (
    <div className={classes.bg}>
      <>
        <Typography
          as="h2"
          color="white"
          align="center"
          className={classes.title}>
          Our Process
        </Typography>
        <div className={classes.cardContainer}>
          {ProcessLink.map((item) => (
            <Card key={item.id} className={classes.cardItem}>
              <div className={classes.cardTitle}>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className={classes.cardIcon}
                />
                <Typography as="h2" className={classes.cardid}>
                  {item.id}
                </Typography>
              </div>
              <div className={classes.cardDesc}>
                <Typography as="h3"> {item.title}</Typography>
                <Typography as="p">{item.desc}</Typography>
              </div>
            </Card>
          ))}
        </div>
      </>
    </div>
  );
}

export default Process;

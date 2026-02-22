import { Card } from "@/components/ui/card/Card";
import Image from "next/image";
import classes from "./Herosection.module.css";
import { Button, Typography } from "@/components/ui";

function HeroSection() {
  return (
    <section className={classes.section}>
      <Image
        src="/landing/hero.png"
        alt="hero"
        width={1440}
        height={1080}
        className={classes.heroImg}
        priority
      />

      <div className={classes.heroContent}>
        <Typography
          as="h1"
          size={72}
          className={classes.heroTitle}
          lineClamp={2}>
          A Digital Product
          <br />
          Agency
        </Typography>
      </div>
      <div className={classes.cardContainer}>
        <Card className={classes.heroCard}>
          <Typography className={classes.cardText}>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </Typography>

          <Button
            label={"Contact Now"}
            className={classes.heroButton}
            color={"primary"}
          />
        </Card>
      </div>
    </section>
  );
}

export default HeroSection;

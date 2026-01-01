"use client";

import classes from "./Servicesection.module.css";

import { Card } from "@/components/ui/card/Card";
import { Button } from "@/components/ui/button/button";
import { Typography } from "@/components/ui/typography/typography";

import { FiPenTool, FiDatabase, FiPackage, FiArrowRight } from "react-icons/fi";
import { LuBug } from "react-icons/lu";

type ServiceItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const services: ServiceItem[] = [
  {
    icon: <FiPenTool size={18} />,
    title: "UI/UX Design",
    description:
      "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.",
  },
  {
    icon: <FiDatabase size={18} />,
    title: "Back-end Development",
    description:
      "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.",
  },
  {
    icon: <LuBug size={18} />,
    title: "Front-end Development",
    description:
      "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.",
  },
  {
    icon: <FiPackage size={18} />,
    title: "Project Delivery",
    description:
      "Donec mi lorem, consequat a quam nec, pellentesque pulvinar sem.",
  },
];

function ServicesSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        {/* LEFT */}
        <Card className={classes.leftCard}>
          <Typography as="h2" className={classes.title}>
            Explore our Gilio team services.
          </Typography>

          <Typography as="p" className={classes.description}>
            Nunc convallis semper justo quis tempor. Praesent molestie, lorem
            sed imperdiet tempor, libero urna semper urna.
          </Typography>

          <Button
            className={classes.meetingButton}
            endIcon={<FiArrowRight size={14} />}
            label=" Schedule Meeting"
            href="/"
            color="orange"
            radius="md"
            /* visibleFrom="sm"*/
          />
        </Card>

        {/* RIGHT */}
        <div className={classes.cardsGrid}>
          {services.map((service) => (
            <Card key={service.title} className={classes.serviceCard}>
              <div className={classes.cardHeader}>
                {/* ✅ ICON DIREKT */}
                <div className={classes.icon}>{service.icon}</div>

                <Typography as="h5">{service.title}</Typography>
              </div>

              <Typography as="p" size="sm" className={classes.cardText}>
                {service.description}
              </Typography>

              <Button
                className={classes.learnMoreButton}
                label="Learn More"
                endIcon={<FiArrowRight size={14} />}
                href="/"
                color="orange"
                radius="md"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

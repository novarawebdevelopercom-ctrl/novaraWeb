"use client";
import {clsx} from "clsx";
import {
  ActionIcon,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import classes from "./ColorShemeToggle.module.css";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

export function ActionToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="xl"
        radius="md"
        aria-label="Toggle color scheme">
        <MdOutlineWbSunny className={clsx(classes.icon, classes.light)} />
        <FaRegMoon className={clsx(classes.icon, classes.dark)} />
      </ActionIcon>
    </Group>
  );
}

"use client";

import { useState } from "react";
import { Container, Group, Burger, Drawer, Box } from "@mantine/core";

// Custom UI Components
import { Anchor } from "@/components/ui/anchor/anchor";
import { Button } from "@/components/ui/button/button";
import { Menu, MenuTarget, MenuDropdown, MenuItem } from "@/components/ui/menu/menu";

// CSS Module
import styles from "./Header.module.css";

export default function Header() {
  const [opened, setOpened] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    {
      label: "Services",
      dropdown: [
        { label: "Web Design", href: "/services/web" },
        { label: "Branding", href: "/services/branding" },
        { label: "SEO", href: "/services/seo" },
      ],
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Box className={styles.headerWrapper}>
      <Container size="lg" className={styles.container}>
        
        {/* Navigation Links (Desktop) */}
        <Group gap="lg" className={styles.centerLinks} visibleFrom="sm">
          {links.map((item, idx) =>
            item.dropdown ? (
              <Menu key={idx} >
                <MenuTarget>
                <Anchor className={styles.navLink}> 
    {item.label}
  </Anchor>
                </MenuTarget>
                <MenuDropdown>
                  {item.dropdown.map((subItem, subIdx) => (
                    <MenuItem
                      key={subIdx}
                      label={subItem.label}
                      component="a"
                      href={subItem.href}
                    />
                  ))}
                </MenuDropdown>
              </Menu>
            ) : (
              <Anchor 
                key={idx}
                className={styles.navLink}
                label={item.label}
                href={item.href}
              />
            )
          )}
        </Group>

        {/* Contact Button */}
        <Button
          label="Contact Us"
          href="/contact-us"
          color="orange"
          radius="md"
         /* visibleFrom="sm"*/
         
        />

        {/* Burger Menu (Mobile) */}
        <Burger opened={opened} onClick={() => setOpened(!opened)} hiddenFrom="sm" />
      </Container>

      {/* Drawer for Mobile */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="md"
        title="Menu"
        hiddenFrom="sm"
      >
        <Group className={styles.mobileGroup} align="start">
          {links.map((item, idx) =>
            item.dropdown ? (
              <Menu key={idx}>
                <MenuTarget>
                <Anchor className={styles.navLink}>
    {item.label}
  </Anchor>
                </MenuTarget>
                <MenuDropdown>
                  {item.dropdown.map((subItem, subIdx) => (
                    <MenuItem
                      key={subIdx}
                      label={subItem.label}
                      component="a"
                      href={subItem.href}
                      onClick={() => setOpened(false)}
                    />
                  ))}
                </MenuDropdown>
              </Menu>
            ) : (
              <Anchor
              className={styles.navLink}
                key={idx}
                label={item.label}
                href={item.href}
                fullWidth
                onClick={() => setOpened(false)}
              />
            )
          )}
          <Button
            label="Contact Us"
            href="/contact-us"
            fullWidth
            color="orange"
          />
        </Group>
      </Drawer>
    </Box>
  );
}

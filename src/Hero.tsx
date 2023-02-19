import React from "react";
import { Button, Container, createStyles, Group, Text } from "@mantine/core";

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
  inner: {
    position: "relative",
    paddingTop: 200,
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },
  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },
  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },
  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export const Hero = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size={"md"} className={classes.inner}>
        <h1 className={classes.title}>
          Hello{" "}
          <Text
            span
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            tt={"uppercase"}
          >
            world
          </Text>{" "}
          hero
        </h1>

        <Text component={"p"} className={classes.description} color="dimmed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit fames,
          imperdiet auctor neque quis mattis leo turpis quisque, mus cras
          facilisis aliquet morbi tortor iaculis. Non nibh conubia laoreet ut
          quisque hendrerit egestas.
        </Text>
        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            lorem
          </Button>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
          >
            ipsum
          </Button>
        </Group>
      </Container>
    </div>
  );
};

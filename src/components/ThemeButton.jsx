import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { IconButton, useColorMode } from "@chakra-ui/react";

export const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onClick={toggleColorMode}
      colorScheme="purple"
      aria-label="Theme"
      size="lg"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    />
  );
};

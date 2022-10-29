import React from "react";
import { useTheme } from "../utils/customHooks";

const UseTheme = () => {
  const { theme, onbuttonRender } = useTheme();

  return (
    <>
      <div>
        {onbuttonRender()}
      </div>
      <div
        style={{
          backgroundColor: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white"
        }}
      >
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          laudantium, quasi veniam labore ut commodi sed, debitis pariatur
          fugiat sunt a dolorem dicta tenetur. Repellendus, quos fugiat
          doloremque obcaecati dolore, eos quis quas veniam, excepturi fuga hic
          consectetur ex. Velit quia eum ullam et incidunt iusto magnam aut
          error sit perferendis, dolore neque maxime perspiciatis aliquid
          numquam amet exercitationem officia, corrupti delectus pariatur
          dolorum quis quasi laudantium libero? Pariatur, ipsam provident
          consectetur porro exercitationem, accusamus numquam obcaecati nulla
          fugiat, tempora laboriosam doloremque non et earum id modi voluptate
          nihil. Beatae sed obcaecati debitis eligendi ipsam eius ipsum
          expedita. Dicta, numquam!
        </div>
      </div>
    </>
  );
};

export default UseTheme;

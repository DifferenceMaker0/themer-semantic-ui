import { radixui } from '../../lib/data';
import { Flex, Text, Button, Box, Container } from "@radix-ui/themes";
import ToggleGroupDemo from "./Componies/toggle-tabs";
 
export const ItemComponent = ({ item }) => (
  <li>
    <a className="DocsNav_DocsNavItem__VrHf6" href={item.href}>
      <div className="rt-Flex rt-r-ai-center rt-r-gap-2">
        <span className="rt-Text rt-r-size-3 md:rt-r-size-4">{item.name}</span>
      </div> 
    </a>  
  </li>
);

export const CategoryComponent = ({ category }) => (
  <div>
  <div className="rt-Box rt-r-px-3 rt-r-py-2">
    <h4 className="rt-Heading rt-r-size-4 md:rt-r-size-5">{category.name}</h4> 
  </div>
    <ul>
      {category.items.map((item) => (
        <ItemComponent key={item.id} item={item} />
      ))}
    </ul>
  </div>
);

export default function SideMenuThemeTree() {
  return (
    <Box height="100%" className="md:width-350px" width="200px" py="20px" px="30px" style={{ background: "var(--gray-a2)", borderRadius: "var(--radius-3)" }}> 
      <ToggleGroupDemo />
      <Flex direction="column">
        <Flex direction="row">
          <Box py="10px">
            <h1 className="rt-Heading rt-r-size-6">Radix-Ui Features</h1>
          </Box>
        </Flex>  
        {radixui.map((category) => (
        <CategoryComponent key={category.id} category={category} />
        ))}
      </Flex> 
    </Box>
  );
}
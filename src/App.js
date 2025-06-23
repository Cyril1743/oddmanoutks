import Pages from "./components/Pages";
import { ChakraProvider} from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <Pages/>
    </ChakraProvider>
  );
}

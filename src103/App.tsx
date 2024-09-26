import Box from "./Box";
import Button from "./Button";
import Button111 from "./Button111";
import Circle from "./Circle";
import GridLayout from "./GridLayout";
import GridLayout11 from "./GridLayout11";
import GridLayoutCircle from "./GridLayoutCircle";

function App() {
  return (
    // <div>
    //   <Button color="red" padding="10px" text="뾰롱" />
    //   <Button color="pick" padding="15px" text="삐롱" />
    //   <Button color="skyblue" padding="20px" text="빼롱" />

    //   {/* /**Box
    //    * 배경색 : pink, orange, skyblue, red
    //    * 사이즈 : small, medium, large -> 50*50 , 100*100 , 200*200
    //    */}

    //   {/* <Box backgroundColor="pink" size="large" />
    //   <Box backgroundColor="red" size="small" />
    //   <Box backgroundColor="skyblue" size="medium" /> */}
    // </div>
    // <GridLayout repeatNumber={3}></GridLayout>

    // <GridLayoutCircle />

    <div>
      <GridLayout11 />
    </div>
  );
}

export default App;

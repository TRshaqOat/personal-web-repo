import {
  CircularProgress,
  Card,
  CardBody,
  Chip,
  CardFooter,
} from "@nextui-org/react";
import { Helmet } from "react-helmet";

const CircleProgress = (props) => {
  const { value, text } = props;
  return (
    <Card
      className="w-[240px] h-[240px] border-none bg-transparent"
      id="progresssection"
    >
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Hepta+Slab:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <CardBody className="justify-center items-center font-slab">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white animate-pulse",
          }}
          value={value}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-5 font-slab">
        <Chip
          classNames={{
            base: "border border-white/50 px-2 py-1",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          {text}
        </Chip>
      </CardFooter>
    </Card>
  );
};

export default CircleProgress;

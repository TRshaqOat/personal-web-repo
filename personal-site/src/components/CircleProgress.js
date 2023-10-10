import {
  CircularProgress,
  Card,
  CardBody,
  Chip,
  CardFooter,
} from "@nextui-org/react";

const CircleProgress = (props) => {
  const { value, text } = props;
  return (
    <Card className="w-[240px] h-[240px] border-none bg-transparent">
      <CardBody className="justify-center items-center pb-0">
        <CircularProgress
          classNames={{
            svg: "w-36 h-36 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={value}
          strokeWidth={4}
          showValueLabel={true}
        />
      </CardBody>
      <CardFooter className="justify-center items-center pt-5">
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

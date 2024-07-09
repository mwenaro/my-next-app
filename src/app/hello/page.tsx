import { Card } from "@/components/card";

export default function Hello() {
  return (
    <div>
      <h1>Hello Page</h1>
      <Card className=" shadow-gray-800">
        <Card.CardHeader>
          <h3>Hello Title</h3>
        </Card.CardHeader>
        <Card.CardBody>
          <Card.CardImage></Card.CardImage>
        </Card.CardBody>
        <Card.CardFooter></Card.CardFooter>
      </Card>
    </div>
  );
}

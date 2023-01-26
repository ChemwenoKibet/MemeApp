import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";

   
  export default function Card() {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="/img/team-3.jpg" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Natalie Paisley
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            CEO / Co-Founder
          </Typography>
        </CardBody>
      </Card>
    );
  }
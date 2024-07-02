import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const TestimonialCard = ({ testimonial }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{testimonial.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{testimonial.message}</CardDescription>
      </CardContent>
    </Card>
  );
};
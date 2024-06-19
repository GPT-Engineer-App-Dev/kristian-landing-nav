import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const About = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
          <CardDescription>Learn more about Kristian Ruiz Kyvik</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Kristian Ruiz Kyvik is a dedicated professional with a passion for web development. With years of experience in the industry, Kristian has worked on numerous projects, delivering high-quality solutions to clients worldwide.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
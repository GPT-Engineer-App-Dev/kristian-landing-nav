import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="max-w-lg">
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>Get in touch with Kristian Ruiz Kyvik</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            If you have any questions or would like to work with Kristian, feel free to reach out via email at kristian@example.com or call us at (123) 456-7890.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
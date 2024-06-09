import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Profile() {
  return (
    <div className="grid gird-cols-1 justify-content-center">
      <div className="flex items-center justify-center">
        <Card className="w-[350px] h-60">
          <CardHeader>
            <CardTitle>Nitesh Singh</CardTitle>
            <CardDescription>Welcome to my profile</CardDescription>
          </CardHeader>
          <CardContent>
            <p>I have created this website</p>
          </CardContent>
          <CardFooter>
            <p>To play with reacter router and shad cn</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

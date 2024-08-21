import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

export default function HomePage() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <Label htmlFor="email">E-mail</Label>
              <div className="mt-2">
                <Input
                  placeholder="E-mail"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="name">Name</Label>
              <div className="mt-2">
                <Input placeholder="Name" id="name" name="name" type="text" />
              </div>
            </div>

            <div>
              <Label htmlFor="lastname">Last Name</Label>
              <div className="mt-2">
                <Input
                  placeholder="Last Name"
                  id="lastname"
                  name="lastname"
                  type="text"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                />
              </div>
            </div>

            <div>
              <Button type="submit">Submit</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

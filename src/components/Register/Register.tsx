"use client";
import React from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import LoginWith from "./SocialLogin/LoginWith";

export default function App() {
  const [selected, setSelected] = React.useState<number | string>("login");

  return (
    <div className="container mx-auto flex flex-col w-full items-center justify-center mt-[80px]">
      <Card className="max-w-full w-[540px] h-[450px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key)}
          >
            <Tab key="login" title="Login">
              <form className="flex flex-col gap-4">
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input isRequired label="Password" placeholder="Enter your password" type="password" />
                <p className="text-center text-small">
                  Need to create an account? <Link href="/signup">Sign up</Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Login
                  </Button>
                </div>
              </form>
            </Tab>
            <Tab as={Link} href="/signup" key="sign-up" title="Sign up"></Tab>
          </Tabs>
        </CardBody>
        {/* Login with */}
        <div className="mx-auto mb-[30px]">
          <LoginWith />
        </div>
      </Card>
    </div>
  );
}

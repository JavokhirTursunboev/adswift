"use client";
import React, { useEffect } from "react";
import { Tabs, Tab, Input, Link, Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function SignUpCom() {
  const [selected, setSelected] = React.useState<number | string>("login");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "login") {
      setSelected("/login");
    } else if (pathname === "/signup") {
      setSelected("sign-up");
    }
  }, [pathname]);
  return (
    <div className="container flex mx-auto flex-col w-full items-center justify-center mt-[80px]">
      <Card className="max-w-full w-[540px] h-[600px]">
        <CardBody className="overflow-hidden">
          <Tabs
            fullWidth
            size="md"
            aria-label="Tabs form"
            selectedKey={selected}
            onSelectionChange={(key) => setSelected(key)}
          >
            <Tab as={Link} href="/login" key="login" title="login"></Tab>
            {/* =======   Sign Up =================== */}
            <Tab key="sign-up" title="Sign up">
              <form className="flex flex-col gap-4 h-[300px]">
                <Input isRequired label="Name" placeholder="Enter your name" type="password" />
                <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                <Input isRequired label="Password" placeholder="Enter your password" type="password" />
                <p className="text-center text-small">
                  Already have an account?{" "}
                  <Link size="sm" href="/login">
                    Login
                  </Link>
                </p>
                <div className="flex gap-2 justify-end">
                  <Button fullWidth color="primary">
                    Sign up
                  </Button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}

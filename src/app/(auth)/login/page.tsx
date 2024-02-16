
import dynamic from "next/dynamic";

const DynamicRegister = dynamic(() => import("@/components/Register/LoginComponent"), {
  loading: () => <p>Loading...</p>,
});
export default function Login() {
 
  return (
    <div>
      <DynamicRegister  />
    </div>
  );
}

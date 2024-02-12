import dynamic from "next/dynamic";

const DynamicRegister = dynamic(() => import("@/components/Register/Register"), {
  loading: () => <p>Loading...</p>,
});
export default function Login() {
  return (
    <div>
      <DynamicRegister />
    </div>
  );
}
